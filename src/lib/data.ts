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
    color: "black",
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
    color: "blue",
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
    color: "red",
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
    color: "silver",
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
    color: "white",
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
    color: "green",
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
    color: "black",
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
    color: "grey",
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
    color: "black",
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
    color: "white",
  },
  {
    id: 11,
    desc: "Sleek and modern sunglasses for everyday style and UV protection.",
    name: "UrbanShield Sunglasses",
    price: 1500,
    originalPrice: 3000,
    discount: 50,
    image: "/imgs/glass.jpeg",
    hoverImage: "/imgs/Homens Óculos de sol sem aro Lente quadrada.jpeg",
    type: "accessories",
    color: "black",
  },
  {
    id: 12,
    desc: "Trendy wristwatch with a minimalist design, perfect for casual and formal wear.",
    name: "ChronoMax Watch",
    price: 12000,
    originalPrice: 20000,
    discount: 40,
    image: "/imgs/watch.jpeg",
    hoverImage: "/imgs/eatch-2.jpeg",
    type: "accessories",
    color: "silver",
  },
  {
    id: 13,
    desc: "High-quality in-ear headphones for immersive sound on the go.",
    name: "TuneBeats Pro",
    price: 7000,
    originalPrice: 14000,
    discount: 50,
    image: "/imgs/ear.jpeg",
    hoverImage: "/imgs/headphone.webp",
    type: "headphones",
    color: "black",
  },
  {
    id: 14,
    desc: "Wireless over-ear headphones with advanced noise cancellation.",
    name: "NoiseFree Max",
    price: 25000,
    originalPrice: 35000,
    discount: 28,
    image: "/imgs/headphone.png",
    hoverImage: "/imgs/headphone.webp",
    type: "headphones",
    color: "black",
  },
  {
    id: 15,
    desc: "Stylish new-age mobile device for ultimate performance and photography.",
    name: "XPhone Ultra",
    price: 200000,
    originalPrice: 250000,
    discount: 20,
    image: "/imgs/newimg.webp",
    hoverImage: "/imgs/mobile-2.jpeg",
    type: "mobiles",
    color: "gold",
  },
  {
    id: 16,
    desc: "Fun and creative doll toy for kids, sparking imagination.",
    name: "DreamDoll Princess",
    price: 3000,
    originalPrice: 6000,
    discount: 50,
    image: "/imgs/dool.webp",
    hoverImage: "/imgs/toy.webp",
    type: "toys",
    color: "pink",
  },
];

export const categories = [
  { name: "all", count: products?.length },
  { name: "mobiles", count: 1 },
  { name: "cameras", count: 5 },
  { name: "gaming", count: 2 },
  { name: "headphones", count: 3 },
];
export const prices = ["500", "1000", "1500", "2000", "2500", "3000", "4000", "5000", "6000", "7000", "8000", "9000", "10000", "1000000", "2000000", "3000000", "4000000", "5000000", "6000000", "7000000", "8000000", "9000000", "10000000"];

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
  color: string;
  type: string;
}
