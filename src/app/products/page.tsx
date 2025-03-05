"use client";
import ProductCard from "@/components/products/ProductCard";
import Sidebar from "@/components/products/Sidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { filtersProps, ProductCardProps, products } from "@/lib/data";
import { LayoutGrid, List, Search } from "lucide-react";
import React, { useState } from "react";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filters, setFilters] = useState<filtersProps>({
    searchQuery: "",
    price: "",
    type: "",
  });

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(filters.searchQuery?.toLowerCase())
    )
    .filter((product) =>
      filters.price ? product.price <= parseFloat(filters.price) : true
    )
    .filter((product) =>
      product.type.toLowerCase().includes(filters.type?.toLowerCase())
    );
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <Sidebar setFilters={setFilters} filters={filters} />

        {/* main content  */}
        <div className="md:col-span-3">
          <div className="flex flex-wrap items-center justify-between mb-6">
            <div className="flex gap-2">
              <Button
                variant={viewMode == "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <LayoutGrid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode == "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            <div className="mb-6">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search products ..."
                  className="w-full pl-4 pr-10"
                  value={filters.searchQuery}
                  onChange={(event) =>
                    setFilters({
                      ...filters,
                      searchQuery: event.target.value,
                    })
                  }
                />
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute right-0 top-0 h-full bg-yellow-400 text-white hover:bg-yellow-500"
                >
                  <Search className="h-04 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* products grid  */}
          <div
            className={`${
              viewMode == "grid"
                ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                : "space-y-6"
            }`}
          >
            {filteredProducts.map(
              (product: ProductCardProps, index: number) => (
                <ProductCard key={index} product={product} layout={viewMode} />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;