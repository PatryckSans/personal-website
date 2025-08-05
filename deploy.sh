#!/bin/bash

set -e

ENVIRONMENT="${1:-prod}"

echo "🚀 Starting deployment for environment: $ENVIRONMENT"

# Build do backend (JavaScript já compilado)
echo "📦 Backend already compiled"

# Deploy da infraestrutura
echo "🏗️ Deploying infrastructure..."
cd infrastructure
terraform init
terraform apply -var-file="environments/$ENVIRONMENT/terraform.tfvars" -auto-approve

# Obter URLs
API_URL="$(terraform output -raw api_gateway_url)"
BUCKET_NAME="$(terraform output -raw s3_bucket_name)"
WEBSITE_URL="$(terraform output -raw website_url)"

echo "🔗 API Gateway URL: $API_URL"
echo "🪣 S3 Bucket: $BUCKET_NAME"
echo "🌐 Website URL: $WEBSITE_URL"

# Build do frontend com API URL
echo "📦 Building frontend..."
cd ../frontend
echo "VITE_API_BASE_URL=$API_URL" > .env.production

# Tentar build, se falhar usar arquivos públicos
if pnpm build; then
    echo "✅ React build completed"
    aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
else
    echo "⚠️ Build failed, using public files"
    aws s3 sync public/ "s3://$BUCKET_NAME" --delete
fi

# Invalidar cache do CloudFront
echo "🔄 Invalidating CloudFront cache..."
CLOUDFRONT_ID="$(aws cloudfront list-distributions --query "DistributionList.Items[?contains(DomainName, 'cloudfront.net')].Id" --output text | head -1)"
if [ -n "$CLOUDFRONT_ID" ]; then
    aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*" > /dev/null
    echo "✅ Cache invalidated"
fi

echo "✅ Deploy completed!"
echo "🌐 Site available at: $WEBSITE_URL"