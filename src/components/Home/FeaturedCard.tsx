"use client";
import { products } from "@/lib/data";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const FeaturedCard = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  // Featured logic - change as per your actual product criteria
  const featuredProducts = products.slice(4); 

  return (
    <section className="bg-gray-100 py-12 px-8">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-8">
        <span className="text-yellow-500 text-3xl font-bold mr-2">F</span>
        EATURED COLLECTION
      </h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {/* Big Image Card (you could make this dynamic too) */}
        <div className="col-span-1 h-full">
          <div className="relative h-10/12 overflow-hidden w-full group">
            <Link href="products">
            <Image
  src={hoveredId === featuredProducts[0].id ? featuredProducts[0].hoverImage : featuredProducts[0].image}
  alt={featuredProducts[0].name}
  width={500} // or whatever fits your design
  height={500}
  className="object-cover transition-transform duration-300 transform group-hover:scale-105"
/>
            </Link>
            <div className="mt-4">
              <h3 className="text-xl font-medium">{featuredProducts[0].name}</h3>
              <p className="font-semibold">{featuredProducts[0].price}</p>
            </div>
          </div>
        </div>

        {/* Smaller Cards (list) */}
        <div className="col-span-1 w-full">
          <div className="flex flex-col w-full space-y-6">
            {featuredProducts.slice(1).map((item) => (
              <div
                key={item.id}
                className="flex justify-between w-full relative group space-x-4 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <Image
                  width={500} // or whatever fits your design
                  height={500} // or whatever fits your design
                  src={hoveredId === item.id ? item.hoverImage : item.image}
                  alt={item.name}
                  className="w-1/2 h-32 object-cover transition-transform duration-300 transform group-hover:scale-105"
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                />
                <div className="flex flex-col justify-center w-1/2">
                  <h3 className="text-xl font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500 truncate">
                    {item.desc.split(" ").slice(0, 10).join(" ")}{item.desc.split(" ").length > 10 ? "..." : ""}
                  </p>
                  <p className="font-semibold mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCard;
