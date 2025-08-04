# Infraestrutura - Personal Website

## Arquitetura

- **Frontend**: S3 + CloudFront
- **Backend**: Lambda + API Gateway
- **Email**: Amazon SES

## Pré-requisitos

1. AWS CLI configurado
2. Terraform instalado
3. Email verificado no Amazon SES

## Deploy

### Deploy completo (recomendado):
```bash
./deploy.sh dev    # Para desenvolvimento
./deploy.sh prod   # Para produção
```

### Deploy manual:
```bash
# 1. Backend
cd backend
npm install && npm run build

# 2. Infraestrutura
cd ../infrastructure
terraform init
terraform apply -var-file="environments/dev/terraform.tfvars"

# 3. Frontend
cd ../frontend
echo "VITE_API_BASE_URL=$(cd ../infrastructure && terraform output -raw api_gateway_url)" > .env.production
pnpm build
aws s3 sync dist/ s3://$(cd ../infrastructure && terraform output -raw s3_bucket_name)
```

## Estrutura

```
infrastructure/
├── main.tf              # Configuração principal
├── variables.tf         # Variáveis globais
├── outputs.tf          # Outputs globais
├── modules/
│   ├── backend/        # Lambda + API Gateway
│   └── frontend/       # S3 + CloudFront
└── environments/
    ├── dev/           # Variáveis de desenvolvimento
    └── prod/          # Variáveis de produção
```