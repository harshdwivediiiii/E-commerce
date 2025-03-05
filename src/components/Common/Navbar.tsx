"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { MapPin, Menu, Search, Shield } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { UserButton, SignInButton, useUser, SignUpButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

// Sample product data
const products = [
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

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isSignedIn } = useUser();
  const [query, setQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const router = useRouter();

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    if (searchTerm.trim()) {
      const matches = products.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredSuggestions(matches);
    } else {
      setFilteredSuggestions([]);
    }
  };

  const handleSuggestionClick = (slug) => {
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
            <Select defaultValue="INR">
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
            <Link href="#" className="flex items-center gap-2 hover:text-yellow-400">
              <MapPin className="h-4 w-4" />
              Store Location
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
            <Button className="block md:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
            {/* Suggestions */}
            {filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredSuggestions.map((product) => (
                  <div key={product.id} className="p-2 flex gap-3 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(product.slug)}>
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

        {/* Mobile Search */}
        <div className="relative md:hidden px-4 mt-2">
          <Input
            type="search"
            placeholder="Search entire store here..."
            className="w-full pl-4 pr-10 text-black rounded-full"
            value={query}
            onChange={handleSearch}
          />
          <Button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 rounded-full">
            <Search className="h-4 w-4" />
          </Button>
          {filteredSuggestions.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg z-50 max-h-60 overflow-y-auto">
              {filteredSuggestions.map((product) => (
                <div key={product.id} className="p-2 flex gap-3 cursor-pointer hover:bg-gray-100" onClick={() => handleSuggestionClick(product.slug)}>
                  <Image src={product.image} width={48} height={48} alt={product.name} />
                  <div className="flex-1 text-sm">{product.name}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="md:hidden bg-zinc-900 text-white p-4">Mobile Menu Here...</div>}
      </div>
    </header>
  );
};

export default Navbar;
