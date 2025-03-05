"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/lib/data";
import ProductCard from "../products/ProductCard";
import { Button } from "../ui/button";
import Link from "next/link";

const NewArrival = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth < 640) {
      setItemsPerPage(1);
    } else if (screenWidth < 1024) {
      setItemsPerPage(2);
    } else {
      setItemsPerPage(4);
    }
  };

  useEffect(() => {
    const maxIndex = Math.max(0, products?.length - itemsPerPage);
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [itemsPerPage]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < products?.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <section>
      <div className="container m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-8">
            <span className="text-yellow-400">N</span>EW ARRIVALS
          </h2>
          <Link href="/products">
            <h5 className="text-gray-400 font-medium cursor-pointer underline">
              See More
            </h5>
          </Link>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-2 w-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
          >
            {products.map((product, index) => (
              <div
                className={`flex-shrink-0 ${
                  itemsPerPage === 1
                    ? "w-full"
                    : itemsPerPage === 2
                    ? "w-1/2"
                    : "w-1/4"
                }`}
                key={index}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-1 sm:p-2 hover:bg-gray-700"
            disabled={currentIndex === 0}
            onClick={prevSlide}
          >
            ❮
          </Button>
          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-1 sm:p-2 hover:bg-gray-700"
            disabled={currentIndex >= products?.length - itemsPerPage}
            onClick={nextSlide}
          >
            ❯
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
