variable "environment" {
  description = "Environment name"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
}

variable "api_gateway_url" {
  description = "API Gateway URL from backend module"
  type        = string
}