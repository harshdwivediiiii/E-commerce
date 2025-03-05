import { ProductCardProps } from "@/lib/data";
import { addToCart } from "@/redux/slice/AddtoCartSlice";
import React from "react";
import { useDispatch } from "react-redux";

const CartButton = ({
  children,
  product,
}: {
  children: React.ReactNode;
  product: ProductCardProps;
}) => {
  const dispatch = useDispatch();

  const handleCart = () => {
    dispatch(addToCart({ ...product, count: 1 }));
  };
  return <div onClick={handleCart}>{children}</div>;
};

export default CartButton;