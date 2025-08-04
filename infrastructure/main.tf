terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "backend" {
  source = "./modules/backend"
  
  environment = var.environment
  from_email  = var.from_email
  to_email    = var.to_email
}

module "frontend" {
  source = "./modules/frontend"
  
  environment    = var.environment
  domain_name    = var.domain_name
  api_gateway_url = module.backend.api_gateway_url
}