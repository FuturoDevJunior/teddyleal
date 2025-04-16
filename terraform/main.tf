terraform {
  required_version = ">= 1.3.0"
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.20.0"
    }
    google = {
      source  = "hashicorp/google"
      version = ">= 4.0.0"
    }
  }
}

provider "google" {
  project = var.gcp_project
  region  = var.gcp_region
}

module "gke" {
  source     = "terraform-google-modules/kubernetes-engine/google//modules/private-cluster"
  project_id = var.gcp_project
  name       = var.cluster_name
  region     = var.gcp_region
  network    = var.network
  subnetwork = var.subnetwork
  ip_range_pods = var.ip_range_pods
  ip_range_services = var.ip_range_services
  node_pools = [
    {
      name         = "default-pool"
      machine_type = "e2-medium"
      min_count    = 1
      max_count    = 3
      local_ssd_count = 0
      disk_size_gb = 50
      disk_type    = "pd-standard"
      image_type   = "COS_CONTAINERD"
      auto_upgrade = true
      auto_repair  = true
      preemptible  = false
    }
  ]
}

provider "kubernetes" {
  host                   = module.gke.endpoint
  token                  = data.google_client_config.default.access_token
  cluster_ca_certificate = base64decode(module.gke.ca_certificate)
} 