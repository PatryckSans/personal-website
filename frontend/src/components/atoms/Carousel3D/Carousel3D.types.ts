export interface Carousel3DItem {
  src: string;
  alt?: string;
  href?: string;
  type?: 'image' | 'video';
  caption?: string;
}

export interface Carousel3DProps {
  items: Carousel3DItem[];
  radius?: number;
  autoRotate?: boolean;
  rotateSpeed?: number;
  itemWidth?: number;
  itemHeight?: number;
  height?: number;
}