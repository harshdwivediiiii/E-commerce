import { ProductCardProps } from "@/lib/data";
import React from "react";

import { Button } from "../ui/button";
import { Eye, RefreshCw, ShoppingCart } from "lucide-react";
import Link from "next/link";
import CartButton from "../Common/CartButton";

const HideButton = ({ product }: { product: ProductCardProps }) => {
  return (
    <div className="my-3">
      <div className="absolute -bottom-3 -right-3 flex justify-center gap-2 p-4 scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-transform">
        <CartButton product={product}>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 bg-black text-white hover: hover:bg-yellow-400"
          >
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </CartButton>
        <Link href={`/products/${product.id}`}>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 bg-black text-white hover: hover:bg-yellow-400"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </Link>

        <Button
          size="icon"
          variant="ghost"
          className="h-8 w-8 bg-black text-white hover: hover:bg-yellow-400"
        >
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default HideButton;