#!/bin/bash

set -e

echo "🔧 Fixing common TypeScript build errors..."

# Corrigir ScrollAnimation - problema com ease do Framer Motion
if [ -f "src/components/atoms/ScrollAnimation/index.tsx" ]; then
    echo "🔧 Fixing ScrollAnimation ease property..."
    sed -i 's/ease: ['\''"][^'\'']*['\''"]//g' src/components/atoms/ScrollAnimation/index.tsx
    sed -i 's/ease: \[[^\]]*\]//g' src/components/atoms/ScrollAnimation/index.tsx
    sed -i '/transition: {/,/}/ { /ease:/d; }' src/components/atoms/ScrollAnimation/index.tsx
fi

# Remover imports não utilizados do Card
echo "🔧 Removing unused Card imports..."
find src -name "*.tsx" -o -name "*.ts" | while read file; do
    if grep -q "import.*Card.*from.*antd" "$file" && ! grep -q "Card" "$file" | grep -v "import"; then
        sed -i 's/Card, //g; s/, Card//g; s/{ Card }/{}/' "$file"
    fi
done

# Corrigir outros erros comuns de tipos
echo "🔧 Fixing common type issues..."

# Corrigir any types explícitos se houver
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/: any\[\]/: unknown[]/g'

echo "✅ Build error fixes applied"