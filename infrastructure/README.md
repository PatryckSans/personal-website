# Infrastructure - Personal Portfolio Website

[![Terraform](https://img.shields.io/badge/Terraform-1.0+-623ce4?logo=terraform)](https://www.terraform.io/)
[![AWS](https://img.shields.io/badge/AWS-Cloud-ff9900?logo=amazonaws)](https://aws.amazon.com/)
[![Infrastructure as Code](https://img.shields.io/badge/IaC-Terraform-623ce4)](https://www.terraform.io/)
[![Multi Environment](https://img.shields.io/badge/Environments-Dev%2FProd-green)](./environments/)

Infrastructure as Code para o portfólio pessoal usando Terraform. Provisiona recursos AWS de forma automatizada, segura e versionada para ambientes de desenvolvimento e produção.

## 🎯 Visão Geral

Esta infraestrutura implementa uma arquitetura serverless moderna na AWS, com foco em alta disponibilidade, segurança e custo-efetividade. Utiliza Terraform para gerenciamento declarativo de recursos e suporte a múltiplos ambientes.

## 🏗️ Arquitetura AWS

```
                    ┌─────────────────┐
                    │   Route 53      │
                    │   (DNS)         │
                    └─────────┬───────┘
                              │
                    ┌─────────▼───────┐
                    │  CloudFront     │
                    │  (CDN Global)   │
                    └─────────┬───────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        │                     │                     │
┌───────▼────────┐   ┌────────▼────────┐   ┌───────▼────────┐
│   S3 Bucket    │   │  API Gateway    │   │ Certificate    │
│  (Frontend)    │   │  (REST API)     │   │  Manager       │
└────────────────┘   └─────────┬───────┘   │  (SSL/TLS)     │
                               │           └────────────────┘
                     ┌─────────▼───────┐
                     │  Lambda         │
                     │  (Backend)      │
                     └─────────┬───────┘
                               │
                     ┌─────────▼───────┐
                     │  Amazon SES     │
                     │  (Email)        │
                     └─────────────────┘
                               │
                     ┌─────────▼───────┐
                     │  CloudWatch     │
                     │  (Monitoring)   │
                     └─────────────────┘
```

## 🚀 Recursos Provisionados

### Frontend (S3 + CloudFront)
- **S3 Bucket** - Hospedagem de arquivos estáticos
- **CloudFront Distribution** - CDN global com cache otimizado
- **Origin Access Control** - Acesso seguro ao S3
- **Custom Error Pages** - Páginas de erro personalizadas

### Backend (Lambda + API Gateway)
- **API Gateway** - Endpoints REST com CORS
- **Lambda Functions** - Funções serverless
- **IAM Roles** - Permissões mínimas necessárias
- **CloudWatch Logs** - Logs centralizados

### Networking & Security
- **Route 53 Hosted Zone** - Gerenciamento de DNS
- **ACM Certificate** - Certificados SSL/TLS automáticos
- **Security Groups** - Controle de acesso
- **WAF Rules** - Proteção contra ataques

### Monitoring & Observability
- **CloudWatch Dashboards** - Métricas visuais
- **CloudWatch Alarms** - Alertas automáticos
- **X-Ray Tracing** - Rastreamento distribuído
- **Cost Budgets** - Controle de custos

## 📁 Estrutura do Projeto

```
infrastructure/
├── 🏗️ modules/                    # Módulos Terraform reutilizáveis
│   ├── backend/                  # Recursos do backend
│   │   ├── main.tf              # Lambda + API Gateway
│   │   ├── variables.tf         # Variáveis do módulo
│   │   └── outputs.tf           # Outputs do módulo
│   └── frontend/                # Recursos do frontend
│       ├── main.tf              # S3 + CloudFront
│       ├── domain.tf            # Route 53 + ACM
│       ├── variables.tf         # Variáveis do módulo
│       └── outputs.tf           # Outputs do módulo
├── 🌍 environments/              # Configurações por ambiente
│   ├── dev/                     # Desenvolvimento
│   │   └── terraform.tfvars     # Variáveis específicas
│   └── prod/                    # Produção
│       └── terraform.tfvars     # Variáveis específicas
├── ⚙️ main.tf                    # Configuração principal
├── 📊 variables.tf               # Variáveis globais
├── 📤 outputs.tf                 # Outputs globais
├── 🔒 .terraform.lock.hcl        # Lock de versões
└── 📖 README.md                  # Este arquivo
```

## 🛠️ Pré-requisitos

### Ferramentas Necessárias

| Ferramenta | Versão | Descrição |
|------------|--------|-----------|
| **Terraform** | 1.0+ | Infrastructure as Code |
| **AWS CLI** | 2+ | Interface AWS |
| **Git** | 2.30+ | Controle de versão |
| **jq** | 1.6+ | Processamento JSON (opcional) |

### Configuração AWS

```bash
# 1. Configure as credenciais AWS
aws configure
# AWS Access Key ID: [sua-access-key]
# AWS Secret Access Key: [sua-secret-key]
# Default region name: us-east-1
# Default output format: json

# 2. Verifique a configuração
aws sts get-caller-identity

# 3. Verifique permissões necessárias
aws iam get-user
```

### Permissões IAM Necessárias

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:*",
        "cloudfront:*",
        "route53:*",
        "acm:*",
        "lambda:*",
        "apigateway:*",
        "iam:*",
        "logs:*",
        "ses:*",
        "wafv2:*"
      ],
      "Resource": "*"
    }
  ]
}
```

## 🚀 Deploy

### Deploy Automatizado (Recomendado)

```bash
# Deploy completo para desenvolvimento
./deploy.sh dev

# Deploy completo para produção
./deploy.sh prod
```

### Deploy Manual

```bash
# 1. Entre na pasta de infraestrutura
cd infrastructure

# 2. Inicialize o Terraform
terraform init

# 3. Selecione o workspace (ambiente)
terraform workspace select dev
# ou
terraform workspace new dev

# 4. Planeje as mudanças
terraform plan -var-file="environments/dev/terraform.tfvars"

# 5. Aplique a infraestrutura
terraform apply -var-file="environments/dev/terraform.tfvars"
```

### Deploy por Módulos

```bash
# Deploy apenas do backend
terraform apply -target=module.backend

# Deploy apenas do frontend
terraform apply -target=module.frontend

# Deploy de recursos específicos
terraform apply -target=aws_s3_bucket.frontend
```

## ⚙️ Configuração de Ambientes

### Desenvolvimento (dev)
```hcl
# environments/dev/terraform.tfvars
environment = "dev"
domain_name = "dev.patrycksans.dev"

# Frontend
frontend_bucket_name = "patryck-sans-portfolio-dev"
cloudfront_price_class = "PriceClass_100"

# Backend
lambda_memory_size = 128
lambda_timeout = 30
api_gateway_throttle_burst_limit = 10
api_gateway_throttle_rate_limit = 5

# Monitoring
enable_detailed_monitoring = false
log_retention_days = 7

# Tags
tags = {
  Environment = "development"
  Project     = "personal-website"
  Owner       = "patryck-sans"
  CostCenter  = "development"
}
```

### Produção (prod)
```hcl
# environments/prod/terraform.tfvars
environment = "prod"
domain_name = "patrycksans.dev"

# Frontend
frontend_bucket_name = "patryck-sans-portfolio-prod"
cloudfront_price_class = "PriceClass_All"

# Backend
lambda_memory_size = 256
lambda_timeout = 60
api_gateway_throttle_burst_limit = 50
api_gateway_throttle_rate_limit = 25

# Monitoring
enable_detailed_monitoring = true
log_retention_days = 30

# Tags
tags = {
  Environment = "production"
  Project     = "personal-website"
  Owner       = "patryck-sans"
  CostCenter  = "production"
}
```

## 🔧 Módulos Terraform

### Módulo Frontend

#### Recursos Criados
- **S3 Bucket** com configuração de website estático
- **CloudFront Distribution** com cache otimizado
- **Route 53 Records** para DNS
- **ACM Certificate** para HTTPS
- **Origin Access Control** para segurança

#### Variáveis Principais
```hcl
variable "domain_name" {
  description = "Nome do domínio principal"
  type        = string
}

variable "bucket_name" {
  description = "Nome do bucket S3"
  type        = string
}

variable "cloudfront_price_class" {
  description = "Classe de preço do CloudFront"
  type        = string
  default     = "PriceClass_100"
}
```

#### Outputs
```hcl
output "s3_bucket_name" {
  description = "Nome do bucket S3"
  value       = aws_s3_bucket.frontend.bucket
}

output "cloudfront_distribution_id" {
  description = "ID da distribuição CloudFront"
  value       = aws_cloudfront_distribution.frontend.id
}

output "website_url" {
  description = "URL do website"
  value       = "https://${var.domain_name}"
}
```

### Módulo Backend

#### Recursos Criados
- **Lambda Function** com runtime Node.js 18
- **API Gateway** com endpoints REST
- **IAM Roles** com permissões mínimas
- **CloudWatch Log Groups** para logs

#### Variáveis Principais
```hcl
variable "lambda_function_name" {
  description = "Nome da função Lambda"
  type        = string
}

variable "lambda_memory_size" {
  description = "Memória da função Lambda (MB)"
  type        = number
  default     = 128
}

variable "lambda_timeout" {
  description = "Timeout da função Lambda (segundos)"
  type        = number
  default     = 30
}
```

#### Outputs
```hcl
output "api_gateway_url" {
  description = "URL base da API Gateway"
  value       = aws_api_gateway_deployment.backend.invoke_url
}

output "lambda_function_arn" {
  description = "ARN da função Lambda"
  value       = aws_lambda_function.backend.arn
}
```

## 📊 Monitoramento

### CloudWatch Dashboards
```hcl
resource "aws_cloudwatch_dashboard" "main" {
  dashboard_name = "${var.project_name}-${var.environment}"

  dashboard_body = jsonencode({
    widgets = [
      {
        type   = "metric"
        width  = 12
        height = 6
        properties = {
          metrics = [
            ["AWS/Lambda", "Invocations", "FunctionName", aws_lambda_function.contact.function_name],
            [".", "Errors", ".", "."],
            [".", "Duration", ".", "."]
          ]
          period = 300
          stat   = "Average"
          region = var.aws_region
          title  = "Lambda Metrics"
        }
      }
    ]
  })
}
```

### CloudWatch Alarms
```hcl
resource "aws_cloudwatch_metric_alarm" "lambda_errors" {
  alarm_name          = "${var.project_name}-lambda-errors-${var.environment}"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = "300"
  statistic           = "Sum"
  threshold           = "5"
  alarm_description   = "This metric monitors lambda errors"
  alarm_actions       = [aws_sns_topic.alerts.arn]

  dimensions = {
    FunctionName = aws_lambda_function.contact.function_name
  }
}
```

### Cost Budgets
```hcl
resource "aws_budgets_budget" "monthly" {
  name         = "${var.project_name}-monthly-budget-${var.environment}"
  budget_type  = "COST"
  limit_amount = var.monthly_budget_limit
  limit_unit   = "USD"
  time_unit    = "MONTHLY"

  cost_filters = {
    Tag = ["Project:${var.project_name}"]
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                 = 80
    threshold_type            = "PERCENTAGE"
    notification_type         = "ACTUAL"
    subscriber_email_addresses = [var.alert_email]
  }
}
```

## 🔒 Segurança

### S3 Bucket Security
```hcl
resource "aws_s3_bucket_public_access_block" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_server_side_encryption_configuration" "frontend" {
  bucket = aws_s3_bucket.frontend.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "AES256"
    }
  }
}
```

### Lambda Security
```hcl
resource "aws_iam_role" "lambda_execution" {
  name = "${var.project_name}-lambda-execution-${var.environment}"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.lambda_execution.name
}
```

### WAF Protection
```hcl
resource "aws_wafv2_web_acl" "main" {
  name  = "${var.project_name}-waf-${var.environment}"
  scope = "CLOUDFRONT"

  default_action {
    allow {}
  }

  rule {
    name     = "RateLimitRule"
    priority = 1

    action {
      block {}
    }

    statement {
      rate_based_statement {
        limit              = 2000
        aggregate_key_type = "IP"
      }
    }

    visibility_config {
      cloudwatch_metrics_enabled = true
      metric_name                = "RateLimitRule"
      sampled_requests_enabled   = true
    }
  }
}
```

## 🧪 Testes

### Validação Terraform
```bash
# Validar sintaxe
terraform validate

# Verificar formatação
terraform fmt -check

# Plano de execução
terraform plan -var-file="environments/dev/terraform.tfvars"

# Validar com checkov (segurança)
checkov -f main.tf
```

### Testes de Infraestrutura
```bash
# Teste de conectividade
curl -I https://patrycksans.dev

# Teste da API
curl -X POST https://api.patrycksans.dev/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test"}'

# Teste de DNS
nslookup patrycksans.dev

# Teste de SSL
openssl s_client -connect patrycksans.dev:443 -servername patrycksans.dev
```

## 📈 Otimização de Custos

### Estratégias Implementadas
- **S3 Intelligent Tiering** - Movimentação automática entre classes
- **CloudFront Caching** - Redução de requests ao origin
- **Lambda Provisioned Concurrency** - Apenas em produção
- **CloudWatch Log Retention** - Retenção configurável
- **Resource Tagging** - Rastreamento de custos

### Estimativa de Custos Mensais

#### Desenvolvimento
- **S3**: ~$1-2 USD
- **CloudFront**: ~$1-3 USD
- **Lambda**: ~$0-1 USD
- **Route 53**: ~$0.50 USD
- **Total**: ~$3-7 USD/mês

#### Produção
- **S3**: ~$2-5 USD
- **CloudFront**: ~$5-15 USD
- **Lambda**: ~$1-5 USD
- **Route 53**: ~$0.50 USD
- **Total**: ~$9-26 USD/mês

## 🔄 CI/CD Integration

### GitHub Actions
```yaml
# .github/workflows/infrastructure.yml
name: Infrastructure Deploy

on:
  push:
    branches: [main]
    paths: ['infrastructure/**']

jobs:
  terraform:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.5.0
          
      - name: Terraform Init
        run: terraform init
        working-directory: infrastructure
        
      - name: Terraform Plan
        run: terraform plan -var-file="environments/prod/terraform.tfvars"
        working-directory: infrastructure
        
      - name: Terraform Apply
        if: github.ref == 'refs/heads/main'
        run: terraform apply -auto-approve -var-file="environments/prod/terraform.tfvars"
        working-directory: infrastructure
```

## 🔧 Troubleshooting

### Problemas Comuns

#### Certificado SSL não validado
```bash
# Verificar status do certificado
aws acm describe-certificate --certificate-arn arn:aws:acm:...

# Verificar registros DNS
aws route53 list-resource-record-sets --hosted-zone-id Z123456789
```

#### CloudFront não atualizando
```bash
# Invalidar cache
aws cloudfront create-invalidation \
  --distribution-id E123456789 \
  --paths "/*"
```

#### Lambda com timeout
```hcl
# Aumentar timeout no Terraform
resource "aws_lambda_function" "contact" {
  timeout = 60  # Aumentar de 30 para 60 segundos
}
```

### Debug
```bash
# Logs detalhados do Terraform
export TF_LOG=DEBUG
terraform apply

# Estado atual dos recursos
terraform show

# Importar recursos existentes
terraform import aws_s3_bucket.frontend bucket-name
```

## 📚 Recursos Adicionais

### Documentação
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
- [Terraform Best Practices](https://www.terraform.io/docs/cloud/guides/recommended-practices/index.html)

### Ferramentas Úteis
- [Terraform Graph](https://www.terraform.io/docs/cli/commands/graph.html)
- [AWS Cost Calculator](https://calculator.aws/)
- [Checkov Security Scanner](https://www.checkov.io/)
- [Terragrunt](https://terragrunt.gruntwork.io/)

## 🤝 Contribuição

### Padrões de Código
- **Naming Convention** - snake_case para recursos
- **Resource Tagging** - Tags obrigatórias em todos os recursos
- **Module Structure** - Separação clara de responsabilidades
- **Documentation** - Comentários em recursos complexos

### Pull Request Guidelines
1. Fork o repositório
2. Crie uma branch descritiva
3. Implemente as mudanças
4. Execute `terraform validate` e `terraform plan`
5. Adicione documentação se necessário
6. Abra um Pull Request

---

<div align="center">
  <strong>Infrastructure as Code desenvolvida com 🏗️ e ☁️</strong>
  <br>
  <sub>Powered by Terraform + AWS + Best Practices</sub>
</div>