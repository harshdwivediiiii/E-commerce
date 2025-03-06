import {
  decrement,
  increment,
  removeFromCart,
} from "@/redux/slice/AddtoCartSlice";
import { RootState } from "@/redux/store";
import { Minus, Plus, Trash2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // ✅ next/image
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";

// ✅ Use the same CartItem type directly from your AddtoCartSlice (to avoid mismatch)
import type { CartItem } from "@/redux/slice/AddtoCartSlice"; // Ensure CartItem type consistency

// ✅ Props type for the component
interface CartProps {
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Cart: React.FC<CartProps> = ({ setIsCartOpen }) => {
  const dispatch = useDispatch();

  // ✅ Correctly type cartItems
  const cartItems = useSelector((state: RootState) => state.cart.cart) as CartItem[];

  const cartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsCartOpen]);

  // ✅ Helper to dispatch actions correctly (because increment/decrement/remove expect {id: string})
  const handleIncrement = (id: string) => dispatch(increment({ id }));
  const handleDecrement = (id: string) => dispatch(decrement({ id }));
  const handleRemove = (id: string) => dispatch(removeFromCart({ id }));

  return (
    <div ref={cartRef} className="max-w-lg mx-auto bg-white p-4 relative rounded-lg">
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2 text-primaryColor p-1 rounded-full"
        aria-label="Close cart"
        onClick={() => setIsCartOpen(false)}
      >
        <X />
      </Button>

      {/* Free Shipping Banner */}
      <div className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4 text-center mt-10">
        ✅ Free shipping and free returns <span className="font-medium">Limited-time</span>
      </div>

      {/* Cart Items List */}
      <div className="max-h-[400px] overflow-y-auto border-t border-b p-2">
        {cartItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-4 border-b py-4 last:border-none"
          >
            {/* ✅ Product Image with next/image */}
            <div className="relative w-20 h-20 rounded-md overflow-hidden">
              <Image
                src={item.image || ""}
                alt={item.name || "Product Image"}
                fill
                className="object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="text-sm font-medium text-gray-800 mb-1">
                {item.name || "Unnamed Product"}
              </h3>
              <p className="text-xs text-gray-500">Color: {item.color}</p>
              <p className="text-sm text-red-500 font-semibold mt-1">
                Rs. {item.price?.toLocaleString() || "N/A"}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDecrement(item.id)}
                className="p-1 bg-gray-200 rounded-md"
              >
                <Minus size={16} />
              </Button>

              <span className="text-sm font-medium">{item.count}</span>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleIncrement(item.id)}
                className="p-1 bg-gray-200 rounded-md"
              >
                <Plus size={16} />
              </Button>

              <Button
                variant="destructive"
                size="icon"
                onClick={() => handleRemove(item.id)}
                className="p-1 bg-red-500 text-white rounded-md"
              >
                <Trash2 size={16} />
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Total & Checkout */}
      <div className="mt-4">
        <p className="text-base font-semibold text-center">
          Total:{" "}
          <span className="text-red-500">
            Rs.{" "}
            {cartItems
              .reduce((total, item) => total + (item.price || 0) * item.count, 0)
              .toLocaleString()}
          </span>
        </p>

        <Link href="#">
          <Button className="text-white w-full py-2 mt-2 rounded text-sm">
            Checkout
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
