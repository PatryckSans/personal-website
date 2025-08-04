# Carousel3D Component

Componente React reutilizável para criar um carrossel 3D interativo com imagens ou vídeos.

## Uso

```tsx
import { Carousel3D } from '@/components/atoms';

const items = [
  {
    src: 'https://example.com/image1.jpg',
    alt: 'Imagem 1',
    href: '#',
    type: 'image'
  },
  {
    src: 'https://example.com/video.mp4',
    alt: 'Vídeo',
    href: '#',
    type: 'video'
  }
];

<Carousel3D
  items={items}
  radius={180}
  autoRotate={true}
  rotateSpeed={-60}
  itemWidth={120}
  itemHeight={170}
  height={600}
/>
```

## Props

- `items`: Array de objetos com src, alt, href e type
- `radius`: Raio do carrossel (padrão: 180)
- `autoRotate`: Rotação automática (padrão: true)
- `rotateSpeed`: Velocidade de rotação em segundos (padrão: -60)
- `itemWidth`: Largura dos itens (padrão: 120)
- `itemHeight`: Altura dos itens (padrão: 170)
- `height`: Altura do container (padrão: 600)

## Funcionalidades

- Rotação automática configurável
- Interação com mouse/touch para controlar rotação
- Suporte a imagens e vídeos
- Efeito de reflexão
- Animações suaves
- Responsivo