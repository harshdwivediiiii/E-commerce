"use client";

import { ProductCardProps } from "@/lib/data";
import Image from "next/image";
import CartButton from "../Common/CartButton";


const ProductDetail = ({ product }: { product: ProductCardProps }) => {
  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* product image with next/image and zoom effect */}
        <div className="relative w-full max-w-md mx-auto overflow-hidden group">
          <div className="relative w-full h-[500px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg transform group-hover:scale-150 transition-transform duration-500 ease-in-out"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* product info */}
        <div className="space-y-6 text-gray-800">
          <h1 className="text-3xl">{product.name}</h1>
          <div className="flex items-center gap-3">
            <span className="text-2xl text-red-500 font-semibold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xl text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
          <p className="text-md leading-relaxed text-gray-400">{product.desc}</p>
          <CartButton product={product}>
            <button className="bg-red-500 text-white px-6 py-3 rounded-lg font-serif hover:bg-red-600 transition duration-300 transform hover:scale-105">
              Add To Cart
            </button>
          </CartButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
