"use client";

import React, { useState, ChangeEvent } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Menu, Search, Shield, Tags } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserButton, SignInButton, useUser, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Define product type
type Product = {
  id: number;
  slug: string;
  name: string;
  price: number;
  image: string;
  desc: string;
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    slug: "infinity-pro-max-5g",
    name: "Infinity Pro Max 5G",
    price: 60000,
    image: "/imgs/mobile.jpeg",
    desc: "Experience innovation at your fingertips with our sleek and powerful smartphone. Designed for performance, built for style."
  },
  {
    id: 2,
    slug: "astra-prime-x",
    name: "Astra Prime X",
    price: 180000,
    image: "/imgs/mobile.jpeg",
    desc: "Your perfect companion for seamless multitasking and crystal-clear photography, all packed in a stylish frame."
  },
  {
    id: 3,
    slug: "sonicboom-wireless",
    name: "SonicBoom Wireless",
    price: 160000,
    image: "/imgs/im-1.jpg",
    desc: "Feel every beat with these premium wireless headphones. Immerse yourself in music like never before."
  },
  {
    id: 4,
    slug: "visionmaster-pro-4k",
    name: "VisionMaster Pro 4K",
    price: 160000,
    image: "/imgs/im-2.jpg",
    desc: "Capture stunning moments with precision and clarity. This camera is your ultimate creative partner."
  },
  {
    id: 5,
    slug: "echopods-ultra",
    name: "EchoPods Ultra",
    price: 60000,
    image: "/imgs/im-3.jpg",
    desc: "Unparalleled sound quality meets ergonomic design. Your everyday music experience just got a serious upgrade."
  },
  {
    id: 6,
    slug: "nova-xtreme-5g",
    name: "Nova Xtreme 5G",
    price: 180000,
    image: "/imgs/im-4.jpg",
    desc: "Redefining performance and style, this smartphone is the ideal blend of innovation and affordability."
  },
  {
    id: 7,
    slug: "bassblitz-360",
    name: "BassBlitz 360",
    price: 160000,
    image: "/imgs/im-5.jpg",
    desc: "Immerse yourself in deep bass and high-fidelity audio with these stylish over-ear headphones."
  },
  {
    id: 8,
    slug: "wavetune-pro",
    name: "WaveTune Pro",
    price: 160000,
    image: "/imgs/im-6.jpg",
    desc: "Built for comfort and crafted for premium audio, these headphones offer the perfect combination of form and function."
  },
  {
    id: 9,
    slug: "gamebox-elite",
    name: "GameBox Elite",
    price: 60000,
    image: "/imgs/dool.webp",
    desc: "Level up your gaming experience with this cutting-edge gaming console. Power, performance, and fun — all in one."
  },
  {
    id: 10,
    slug: "playsphere-x",
    name: "PlaySphere X",
    price: 60000,
    image: "/imgs/dool.webp",
    desc: "Bring your imagination to life with this ultra-cool gaming gadget. From intense battles to casual fun — it's all here."
  },
  {
    id: 11,
    slug: "urbanshield-sunglasses",
    name: "UrbanShield Sunglasses",
    price: 1500,
    image: "/imgs/glass.jpeg",
    desc: "Sleek and modern sunglasses for everyday style and UV protection."
  },
  {
    id: 12,
    slug: "chronomax-watch",
    name: "ChronoMax Watch",
    price: 12000,
    image: "/imgs/watch.jpeg",
    desc: "Trendy wristwatch with a minimalist design, perfect for casual and formal wear."
  },
  {
    id: 13,
    slug: "tunebeats-pro",
    name: "TuneBeats Pro",
    price: 7000,
    image: "/imgs/ear.jpeg",
    desc: "High-quality in-ear headphones for immersive sound on the go."
  },
  {
    id: 14,
    slug: "noisefree-max",
    name: "NoiseFree Max",
    price: 25000,
    image: "/imgs/headphone.png",
    desc: "Wireless over-ear headphones with advanced noise cancellation."
  },
  {
    id: 15,
    slug: "xphone-ultra",
    name: "XPhone Ultra",
    price: 200000,
    image: "/imgs/newimg.webp",
    desc: "Stylish new-age mobile device for ultimate performance and photography."
  },
  {
    id: 16,
    slug: "dreamdoll-princess",
    name: "DreamDoll Princess",
    price: 3000,
    image: "/imgs/dool.webp",
    desc: "Fun and creative doll toy for kids, sparking imagination."
  }
];

// Price list in INR
export const prices = [
  500, 1000, 1500, 2000, 2500, 3000, 4000, 5000,
  6000, 7000, 8000, 9000, 10000, 1000000, 2000000,
].map((price) => `₹${price.toLocaleString()}`);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const { isSignedIn } = useUser();
  const [query, setQuery] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<Product[]>([]); // Fixed type here
  const router = useRouter();

  // Handle search filtering
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim()) {
      const matches = products.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.desc.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle suggestion click (navigate to product page)
  const handleSuggestionClick = (slug: string) => {
    router.push(slug);
  };

  return (
    <header className="w-full relative">
      {/* Top Bar */}
      <div className="bg-zinc-900 text-white py-2 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-4">
            <Select defaultValue="english">
              <SelectTrigger className="w-[100px] bg-transparent border-0">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="inr">
              <SelectTrigger className="w-[80px] bg-transparent border-0">
                <SelectValue placeholder="Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="inr">INR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-6 items-center">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <span className="cursor-pointer hover:text-yellow-400">Sign In</span>
                </SignInButton>
                <SignUpButton>
                  <span className="cursor-pointer hover:text-yellow-400">Sign Up</span>
                </SignUpButton>
              </>
            )}
            <Link href="/products" className="flex items-center gap-2 hover:text-yellow-400">
              <Tags className="h-4 w-4" />
              Products
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <Shield className="h-4 w-4" />
              Guarantee
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="bg-zinc-800 py-4">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
          <div className="flex items-center gap-2">
            <Button
              className="block md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-yellow-400 rounded-full p-2">
                <span className="text-2xl font-bold">E</span>
              </div>
              <span className="uppercase text-2xl font-bold text-white">Ecommerce</span>
            </Link>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8 relative">
            <Input
              type="search"
              placeholder="Search entire store here..."
              className="w-full pl-4 pr-10 text-black rounded-full"
              value={query}
              onChange={handleSearch}
            />
            <Button className="absolute right-0 top-0 h-full bg-yellow-400 rounded-full">
              <Search className="h-4 w-4" />
            </Button>

            {filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredSuggestions.map((product) => (
                  <div
                    key={product.id}
                    className="p-2 flex gap-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSuggestionClick(product.slug)}
                  >
                    <Image src={product.image} width={48} height={48} alt={product.name} />
                    <div className="flex-1 text-sm">
                      {product.name} - ₹{product.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 text-white p-4">Mobile Menu Here...</div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
