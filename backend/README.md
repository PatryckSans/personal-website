# Backend - Personal Website

## Configuração

1. Instalar dependências:
```bash
npm install
```

2. Configurar AWS CLI com suas credenciais

3. Verificar email no Amazon SES:
   - Acesse o console do SES
   - Verifique o email `patrycksans@gmail.com`

## Deploy

```bash
./deploy.sh
```

## Estrutura

- `src/functions/contact/handler.ts` - Função Lambda para processar formulário de contato
- `template.yaml` - Template SAM para infraestrutura
- `deploy.sh` - Script de deploy

## Variáveis de Ambiente

- `FROM_EMAIL` - Email remetente (deve estar verificado no SES)
- `TO_EMAIL` - Email destinatário
- `AWS_REGION` - Região AWS (padrão: us-east-1)