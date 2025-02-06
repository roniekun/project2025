"use client";
import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { CartItems } from "./util/CartItems";
import { addProduct } from "@/app/redux/slices/CartSlice";
import { CartItemProps } from "@/app/redux/slices/CartSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Cart = () => {
  const dispatch = useAppDispatch();

  let defaultItem: CartItemProps = {
    product: "Sample Product #1",
    id: uuidv4(),
    price: 0,
    quantity: 1,
    maxQuantity: 5,
    basePrice: 100,
  };

  let secondItem: CartItemProps = {
    product: "Sample Product #2",
    id: uuidv4(),
    price: 0,
    quantity: 1,
    maxQuantity: 7,
    basePrice: 300,
  };

  useEffect(() => {
    dispatch(addProduct(defaultItem));
    dispatch(addProduct(secondItem));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col p-4 gap-5 bg-zinc-200">
      <header className="flex justify-center items-center w-full relative text-2xl font-semibold">
        <h1 className="self-center">Cart</h1>
      </header>
      <div className="grid  gap-5">
        <CartItems />
      </div>
    </div>
  );
};
export default Cart;
