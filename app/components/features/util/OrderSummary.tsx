import { useAppSelector } from "@/app/redux/hooks/hooks";
import { useEffect, useState } from "react";

const OrderSummary = () => {
  const selectedItem = useAppSelector((state) => state.checkout);
  const cart = useAppSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const result = cart
      .filter((item) => selectedItem.includes(item.id))
      .reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);

    // Set the total price to the state
    setTotalPrice(result);
  }, [cart, selectedItem]);

  return (
    <div className="flex relative w-full flex-col p-4 gap-5 bg-zinc-100 rounded-2xl">
      <h2 className="text-lg font-bold">Order Summary</h2>
      <div >
        <p className="font-bold">Total Price</p>
        <div>{totalPrice}</div>
      </div>
      <button className="p-4 shadow-md font-semibold">Checkout now</button>
    </div>
  );
};
export default OrderSummary;
