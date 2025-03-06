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
    dispatch(
      addToCart({
        id: String(product.id),
        name: product.name,
        price: product.price,
        image: product.image,
        color: product.color,
      })
    );
  };

  return <div onClick={handleCart}>{children}</div>;
};

export default CartButton;
