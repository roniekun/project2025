"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { CartItems } from "./util/CartItems";
import { addProduct } from "@/app/redux/slices/CartSlice";
import { CartItemProps } from "@/app/redux/slices/CartSlice";
import { v4 as uuidv4 } from "uuid";
import SelectAllCartItems from "./util/SelectAllCartItems";
import { useState, useEffect } from "react";
import DeleteItem from "./util/DeleteItem";
import OrderSummary from "./util/OrderSummary";

const Cart = () => {
  const dispatch = useAppDispatch();
  const [deleteId, setDeleteId] = useState<string>("");
  const cart = useAppSelector((state) => state.cart);
  const [selectionStatus, setSelectionStatus] = useState<
    { isSelected: boolean }[]
  >([]);

  useEffect(() => {
    cart.forEach((item) => item.quantity === 0 && setDeleteId(item.id));
  }, [cart]);

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
      {deleteId && <DeleteItem setDeleteId={setDeleteId} id={deleteId} />}
      <header className="flex justify-center items-center w-full relative text-2xl font-semibold">
        <h1 className="self-center">Cart</h1>
      </header>
      <div className="grid  gap-5">
        <SelectAllCartItems
          setDeleteId={setDeleteId}
          setSelectionStatus={setSelectionStatus}
          selectionStatus={selectionStatus}
        />
        <div className="lg:grid lg:grid-cols-5 gap-5">
          <div className="col-span-3">
            <CartItems
              setDeleteId={setDeleteId}
              setSelectionStatus={setSelectionStatus}
              deleteId={deleteId}
              selectionStatus={selectionStatus}
            />
          </div>
          <div className="w-full relative col-span-2" >
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
