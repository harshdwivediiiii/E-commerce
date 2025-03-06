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
    const maxIndex = Math.max(0, products.length - itemsPerPage);
    setCurrentIndex((prev) => Math.min(prev, maxIndex));
  }, [itemsPerPage]);

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextSlide = () => {
    if (currentIndex < products.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const translateX = `translateX(-${currentIndex * (100 / itemsPerPage)}%)`;

  const getSlideClass = () => {
    if (itemsPerPage === 1) return "new-arrivals-slide-full";
    if (itemsPerPage === 2) return "new-arrivals-slide-half";
    return "new-arrivals-slide-quarter";
  };

  return (
    <section>
      <div className="container m-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            <span className="text-yellow-400">N</span>EW ARRIVALS
          </h2>
          <Link href="/products" className="text-gray-400 font-medium underline">
            See More
          </Link>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="new-arrivals-slider-track"
            style={{ transform: translateX }}
          >
            {products.map((product) => (
              <div className={getSlideClass()} key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          <Button
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 hover:bg-gray-700"
            disabled={currentIndex === 0}
            onClick={prevSlide}
          >
            ❮
          </Button>

          <Button
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 hover:bg-gray-700"
            disabled={currentIndex >= products.length - itemsPerPage}
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
