import { useAppSelector } from "@/app/redux/hooks/hooks";
import { RootState } from "@/app/redux/store";

const OrderSummary = () => {

  return (
    <div className="flex  flex-col p-4 gap-5 bg-zinc-100 rounded-2xl">
      <h2 className="text-lg font-bold">Order Summary</h2>
      <div className="grid grid-cols-2">
        <p className="font-bold">Total Price</p>
        <div></div>
      </div>
      <button className="p-4 shadow-md font-semibold">Checkout now</button>
    </div>
  );
};
export default OrderSummary;
