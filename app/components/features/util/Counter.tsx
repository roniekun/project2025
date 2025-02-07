import { useAppDispatch } from "@/app/redux/hooks/hooks";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { CartItemProps } from "@/app/redux/slices/CartSlice";
import {
  reduceCount,
  addCustomCount,
  addCount,
} from "@/app/redux/slices/CartSlice";

interface Props {
  item: CartItemProps;
}

const Counter: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      id="counter"
      className="flex justify-center items-center h-12 w-fit rounded-md border-black border"
    >
      <button
        onClick={() => dispatch(reduceCount(item.id))}
        className="border relative h-full w-full px-3 justify-center items-center border-black"
      >
        <RiSubtractLine className="cursor-pointer" />
      </button>

      <input
        type="text"
        maxLength={2}
        inputMode="numeric"
        value={item.quantity}
        onChange={(e) => {
          e.preventDefault();
          const newCount = Number(e.target.value.replace(/[^0-9]/g, ""));
          if (!isNaN(newCount)) {
            dispatch(addCustomCount({ id: item.id, count: newCount }));
          }
        }}
        className="flex text-center bg-transparent border border-black h-full w-[3ch] px-1 focus:outline-none"
      />
      <button
        onClick={() => dispatch(addCount(item.id))}
        className="border relative h-full w-full px-3 justify-center items-center border-black"
      >
        <IoAddSharp className="cursor-pointer " width={20} height={20} />
      </button>
    </div>
  );
};
export default Counter;
