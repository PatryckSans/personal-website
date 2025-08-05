#!/bin/bash

# Script para otimização SEO e submissão ao Google
# Execute após o deploy do site

echo "🚀 Iniciando otimização SEO..."

# URLs importantes do site
SITE_URL="https://d17a4k0d28eeju.cloudfront.net"
SITEMAP_URL="$SITE_URL/sitemap.xml"

echo "📍 Site URL: $SITE_URL"
echo "🗺️  Sitemap URL: $SITEMAP_URL"

echo ""
echo "📋 PRÓXIMOS PASSOS PARA SEO:"
echo ""
echo "1. 🔍 Google Search Console:"
echo "   - Acesse: https://search.google.com/search-console"
echo "   - Adicione a propriedade: $SITE_URL"
echo "   - Verifique a propriedade via HTML tag ou DNS"
echo "   - Submeta o sitemap: $SITEMAP_URL"
echo ""
echo "2. 🌐 Google My Business (opcional):"
echo "   - Crie perfil profissional no Google"
echo "   - Adicione informações de contato"
echo ""
echo "3. 🔗 Backlinks importantes:"
echo "   - LinkedIn: https://linkedin.com/in/patryck-sans"
echo "   - GitHub: https://github.com/patryck-sans"
echo "   - Adicione link do portfolio em ambos"
echo ""
echo "4. 📱 Redes sociais:"
echo "   - Compartilhe o link do portfolio"
echo "   - Use hashtags: #PatryckSans #Desenvolvedor #React"
echo ""
echo "5. ✅ Verificações:"
echo "   - Teste no Google: site:$SITE_URL"
echo "   - Verifique meta tags: view-source:$SITE_URL"
echo "   - Teste velocidade: https://pagespeed.web.dev/"
echo ""
echo "🎯 DICA: O Google pode levar de 1-4 semanas para indexar completamente"
echo "💡 Monitore no Google Search Console o progresso da indexação"