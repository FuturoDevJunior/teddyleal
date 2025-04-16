output "kubernetes_cluster_name" {
  description = "Nome do cluster Kubernetes criado"
  value       = module.gke.name
}

output "kubernetes_endpoint" {
  description = "Endpoint do cluster Kubernetes"
  value       = module.gke.endpoint
} 