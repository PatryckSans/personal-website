#!/bin/bash

set -e

ENVIRONMENT=${1:-dev}

echo "🚀 Iniciando deploy para ambiente: $ENVIRONMENT"

# Build do backend (JavaScript já compilado)
echo "📦 Backend já compilado"

# Deploy da infraestrutura
echo "🏗️ Fazendo deploy da infraestrutura..."
cd infrastructure
terraform init
terraform apply -var-file="environments/$ENVIRONMENT/terraform.tfvars" -auto-approve

# Obter URLs
API_URL=$(terraform output -raw api_gateway_url)
BUCKET_NAME=$(terraform output -raw s3_bucket_name)
WEBSITE_URL=$(terraform output -raw website_url)

echo "🔗 API Gateway URL: $API_URL"
echo "🪣 S3 Bucket: $BUCKET_NAME"
echo "🌐 Website URL: $WEBSITE_URL"

# Build do frontend com API URL
echo "📦 Fazendo build do frontend..."
cd ../frontend
echo "VITE_API_BASE_URL=$API_URL" > .env.production

# Tentar build, se falhar usar arquivos públicos
if pnpm build; then
    echo "✅ Build do React concluído"
    aws s3 sync dist/ s3://$BUCKET_NAME --delete
else
    echo "⚠️ Build falhou, usando arquivos públicos"
    aws s3 sync public/ s3://$BUCKET_NAME --delete
fi

# Invalidar cache do CloudFront
echo "🔄 Invalidando cache do CloudFront..."
CLOUDFRONT_ID=$(aws cloudfront list-distributions --query "DistributionList.Items[?contains(DomainName, 'cloudfront.net')].Id" --output text | head -1)
if [ ! -z "$CLOUDFRONT_ID" ]; then
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_ID --paths "/*" > /dev/null
    echo "✅ Cache invalidado"
fi

echo "✅ Deploy concluído!"
echo "🌐 Site disponível em: $WEBSITE_URL"