output "api_gateway_url" {
  description = "API Gateway URL"
  value       = module.backend.api_gateway_url
}

output "cloudfront_url" {
  description = "CloudFront distribution URL"
  value       = module.frontend.cloudfront_url
}

output "s3_bucket_name" {
  description = "S3 bucket name for frontend"
  value       = module.frontend.s3_bucket_name
}

output "website_url" {
  description = "Website URL"
  value       = module.frontend.website_url
}