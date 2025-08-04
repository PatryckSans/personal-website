# Setup de Domínio Personalizado

## Passos para configurar seu domínio:

### 1. Registrar/Transferir domínio para Route 53
```bash
# Se já tem o domínio em outro registrar, transfira para Route 53
# Ou registre um novo domínio diretamente no Route 53
```

### 2. Atualizar configuração do ambiente
Edite o arquivo `infrastructure/environments/prod/terraform.tfvars`:
```hcl
environment = "prod"
from_email  = "patrycksans@gmail.com"
to_email    = "patrycksans@gmail.com"
aws_region  = "us-east-1"
domain_name = "seudominio.com"  # Adicione esta linha
```

### 3. Fazer deploy
```bash
./deploy.sh prod
```

## O que acontece automaticamente:

1. **Certificado SSL**: Criado via ACM com validação DNS
2. **DNS**: Registros A para domínio e www
3. **CloudFront**: Configurado com certificado personalizado
4. **HTTPS**: Redirecionamento automático HTTP → HTTPS

## Custos estimados (mensais):
- Route 53 Hosted Zone: $0.50
- CloudFront: ~$1-5 (dependendo do tráfego)
- ACM Certificate: Gratuito
- S3: ~$0.50-2 (dependendo do storage)
- Lambda: Gratuito (até 1M requests)

## Tempo de propagação:
- Certificado SSL: 5-10 minutos
- DNS: 5-48 horas (geralmente < 1 hora)