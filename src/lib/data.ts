export const products = [
  {
    id: 1,
    desc: "Experience innovation at your fingertips with our sleek and powerful smartphone. Designed for performance, built for style.",
    name: "Infinity Pro Max 5G",
    price: 60000,
    originalPrice: 200000,
    discount: 70,
    image: "/imgs/mobile.jpeg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "mobiles",
  },
  {
    id: 2,
    desc: "Your perfect companion for seamless multitasking and crystal-clear photography, all packed in a stylish frame.",
    name: "Astra Prime X",
    price: 180000,
    originalPrice: 200000,
    discount: 10,
    image: "/imgs/mobile.jpeg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "mobiles",
  },
  {
    id: 3,
    desc: "Feel every beat with these premium wireless headphones. Immerse yourself in music like never before.",
    name: "SonicBoom Wireless",
    price: 160000,
    originalPrice: 200000,
    discount: 20,
    image: "/imgs/im-1.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "headphones",
  },
  {
    id: 4,
    desc: "Capture stunning moments with precision and clarity. This camera is your ultimate creative partner.",
    name: "VisionMaster Pro 4K",
    price: 160000,
    originalPrice: 200000,
    discount: 20,
    image: "/imgs/im-2.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "cameras",
  },
  {
    id: 5,
    desc: "Unparalleled sound quality meets ergonomic design. Your everyday music experience just got a serious upgrade.",
    name: "EchoPods Ultra",
    price: 60000,
    originalPrice: 200000,
    discount: 70,
    image: "/imgs/im-3.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "headphones",
  },
  {
    id: 6,
    desc: "Redefining performance and style, this smartphone is the ideal blend of innovation and affordability.",
    name: "Nova Xtreme 5G",
    price: 180000,
    originalPrice: 200000,
    discount: 10,
    image: "/imgs/im-4.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "mobiles",
  },
  {
    id: 7,
    desc: "Immerse yourself in deep bass and high-fidelity audio with these stylish over-ear headphones.",
    name: "BassBlitz 360",
    price: 160000,
    originalPrice: 200000,
    discount: 20,
    image: "/imgs/im-5.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "headphones",
  },
  {
    id: 8,
    desc: "Built for comfort and crafted for premium audio, these headphones offer the perfect combination of form and function.",
    name: "WaveTune Pro",
    price: 160000,
    originalPrice: 200000,
    discount: 20,
    image: "/imgs/im-6.jpg",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "headphones",
  },
  {
    id: 9,
    desc: "Level up your gaming experience with this cutting-edge gaming console. Power, performance, and fun — all in one.",
    name: "GameBox Elite",
    price: 60000,
    originalPrice: 200000,
    discount: 70,
    image: "/imgs/dool.webp",
    hoverImage: "/imgs/toy.webp",
    type: "gaming",
  },
  {
    id: 10,
    desc: "Bring your imagination to life with this ultra-cool gaming gadget. From intense battles to casual fun — it's all here.",
    name: "PlaySphere X",
    price: 60000,
    originalPrice: 200000,
    discount: 70,
    image: "/imgs/dool.webp",
    hoverImage: "/imgs/toy.webp",
    type: "gaming",
  },
];

export const categories = [
  { name: "all", count: products?.length },
  { name: "mobiles", count: 1 },
  { name: "cameras", count: 5 },
  { name: "gaming", count: 2 },
  { name: "headphones", count: 3 },
];
export const prices = ["50", "100", "150", "200"];

export interface filtersProps {
  searchQuery: string;
  price: string;
  type: string;
}

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  hoverImage: string;
}

export interface RootState {
  cart: CartItem[];
}

export interface ProductCardProps {
  id: number;
  name: string;
  desc: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  hoverImage: string;
}