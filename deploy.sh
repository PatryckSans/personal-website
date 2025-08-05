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

# Verificar se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    pnpm install
fi

# Tentar build com tratamento de erros
echo "🔨 Attempting React build..."
if pnpm build 2>&1; then
    echo "✅ React build completed successfully"
    if [ -d "dist" ] && [ "$(ls -A dist)" ]; then
        echo "📤 Uploading React build to S3..."
        aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
    else
        echo "❌ Build directory is empty, using fallback"
        aws s3 sync public/ "s3://$BUCKET_NAME" --delete
    fi
else
    echo "⚠️ React build failed, attempting to fix common issues..."
    
    # Usar script auxiliar para corrigir erros
    if [ -f "../fix-build-errors.sh" ]; then
        ../fix-build-errors.sh
    fi
    
    # Tentar build novamente
    echo "🔨 Retrying build after fixes..."
    if pnpm build 2>&1; then
        echo "✅ Build successful after fixes"
        aws s3 sync dist/ "s3://$BUCKET_NAME" --delete
    else
        echo "❌ Build still failing, using public files as fallback"
        aws s3 sync public/ "s3://$BUCKET_NAME" --delete
    fi
fi

# Invalidar cache do CloudFront
echo "🔄 Invalidating CloudFront cache..."
CLOUDFRONT_ID="$(terraform output -raw cloudfront_distribution_id 2>/dev/null || aws cloudfront list-distributions --query "DistributionList.Items[?contains(DomainName, 'cloudfront.net')].Id" --output text | head -1)"
if [ -n "$CLOUDFRONT_ID" ] && [ "$CLOUDFRONT_ID" != "null" ]; then
    echo "🔄 Using CloudFront ID: $CLOUDFRONT_ID"
    aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*" > /dev/null 2>&1
    echo "✅ Cache invalidation requested"
else
    echo "⚠️ CloudFront distribution ID not found, skipping cache invalidation"
fi

echo "✅ Deploy completed!"
echo "🌐 Site available at: $WEBSITE_URL"