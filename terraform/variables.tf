variable "gcp_project" {
  description = "ID do projeto GCP"
  type        = string
}

variable "gcp_region" {
  description = "Região do GCP para o cluster Kubernetes"
  type        = string
  default     = "us-central1"
}

variable "cluster_name" {
  description = "Nome do cluster Kubernetes"
  type        = string
  default     = "url-shortener-cluster"
}

variable "network" {
  description = "Nome da VPC network"
  type        = string
}

variable "subnetwork" {
  description = "Nome da sub-rede"
  type        = string
}

variable "ip_range_pods" {
  description = "Range de IPs para pods"
  type        = string
}

variable "ip_range_services" {
  description = "Range de IPs para services"
  type        = string
} 