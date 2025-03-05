import { ProductCardProps } from "@/lib/data";
import Image from "next/image";
import React, { useState } from "react";
import HideButton from "./HideButton";
import { cn } from "@/lib/utils";

const ProductCard = ({
  product,
  layout,
}: {
  product: ProductCardProps;
  layout?: string;
}) => {
  const { desc, name, price, originalPrice, discount, image, hoverImage } =
    product;
  const [isHovered, setIsHovered] = useState(false);
  console.log(desc, "desc");

  return (
    <div
      className={`group relative shadow-lg shadow-gray-500 p-3 ${
        layout == "list" && "flex gap-6"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 left-0 z-10 bg-red-500 text-white px-2 py-1">
        -{discount}%
      </div>

      <div
        className={cn(
          "relative rounded-lg overflow-hidden aspect-square",
          layout == "grid" ? "" : "w-48"
        )}
      >
        <Image
          src={isHovered ? hoverImage : image}
          alt={name}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
        />
      </div>

      <div className="relative">
        <HideButton product={product} />
        <div>
          <h3 className="text-sm font-medium text-gray-900 hover:text-yellow-400 cursor-pointer">
            {name}
          </h3>
          <div className="flex gap-2">
            <span className="text-red-500 font-semibold">
            ₹{price?.toFixed(2)}
            </span>
            <span className="text-gray-500 line-through">
            ₹{originalPrice?.toFixed(2)}
            </span>
          </div>
          {layout === "list" && (
            <p
              className={
                "relative overflow-hidden rounded-lg text-gray-400 text-sm line-clamp-2 mb-10"
              }
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;