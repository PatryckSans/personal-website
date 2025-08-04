variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name"
  type        = string
}

variable "from_email" {
  description = "Email remetente (deve estar verificado no SES)"
  type        = string
}

variable "to_email" {
  description = "Email destinatário"
  type        = string
}

variable "domain_name" {
  description = "Domain name for the website"
  type        = string
  default     = ""
}