import { decrement, increment, removeFromCart } from "@/redux/slice/AddtoCartSlice";
import { RootState } from "@/redux/store";
import { Minus, Plus, Trash2, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button"; // Ensure this path is correct for your Shadcn setup

const Cart = ({ setIsCartOpen }: { setIsCartOpen: any }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cart) || [];

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

  return (
    <div
      ref={cartRef}
      className="max-w-lg mx-auto bg-white p-4 relative rounded-lg shadow-lg"
    >
      {/* Close Button */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-2 left-2"
        onClick={() => setIsCartOpen(false)}
      >
        <X className="w-5 h-5 text-primaryColor" />
      </Button>

      {/* Announcement Banner */}
      <div className="bg-green-100 text-green-700 text-sm p-2 rounded mb-4 text-center mt-10">
        ✅ Free shipping and free returns
        <span className="font-medium"> Limited-time</span>
      </div>

      {/* Cart Items */}
      <div className="max-h-[400px] overflow-y-auto border-t border-b p-2">
        {cartItems.map((item: any, index: number) => (
          <div
            key={`${item.id}-${index}`}
            className="flex items-center gap-4 border-b py-4 last:border-none"
          >
            {/* Product Image */}
            <Image
              width={100}
              height={100}
              src={item?.image || ""}
              alt={item.name}
              className="w-20 h-20 object-cover rounded-md"
            />

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

            {/* Quantity & Actions */}
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(decrement(item))}
              >
                <Minus size={16} />
              </Button>

              <span className="text-sm font-medium">{item.count}</span>

              <Button
                variant="outline"
                size="icon"
                onClick={() => dispatch(increment(item))}
              >
                <Plus size={16} />
              </Button>

              <Button
                variant="destructive"
                size="icon"
                onClick={() => dispatch(removeFromCart(item))}
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
              .reduce(
                (total: any, item: any) => total + (item.price || 0) * item.count,
                0
              )
              .toLocaleString()}
          </span>
        </p>

        <Link href="#" passHref>
          <Button className="w-full mt-2">Checkout</Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
