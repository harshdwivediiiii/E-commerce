import ProductDetail from "@/components/products/ProductDetail";
import { ProductCardProps, products } from "@/lib/data";
import React from "react";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = products.find(
    (item: ProductCardProps) => item.id == parseInt(id)
  );

  if (!product) {
    return (
      <h2 className="text-center text-red-500 font-semibold text-lg h-[60vh]">
        Product not found
      </h2>
    );
  }

  return <ProductDetail product={product} />;
};

export default ProductDetails;