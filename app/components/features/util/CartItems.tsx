"use client";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks/hooks";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { selectItems, deselectItems } from "@/app/redux/slices/CheckoutSlice";
import { Dispatch, SetStateAction } from "react";
import Counter from "./Counter";

interface Props {
  setSelectionStatus: Dispatch<SetStateAction<{ isSelected: boolean }[]>>;
  setDeleteId: Dispatch<SetStateAction<string>>;
  selectionStatus: {
    isSelected: boolean;
  }[];
  deleteId?: string;
}

const CartItems: React.FC<Props> = ({
  setSelectionStatus,
  selectionStatus,
}) => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const targetRefs = useRef<HTMLInputElement[]>([]);
  const selectedItems = useAppSelector((state) => state.checkout);

  function setRef(idx: number, el: HTMLInputElement | null) {
    if (el) {
      targetRefs.current[idx] = el;
    }
  }

  // sets the initial state
  useEffect(() => {
    setSelectionStatus(
      cart.map((item) =>
        selectedItems.includes(item.id)
          ? { isSelected: true }
          : { isSelected: false }
      )
    );
  }, [cart, selectedItems]);

  // Function to toggle individual checkboxes
  const handleSelectItems = (id: string, idx: number) => {
    if (!selectionStatus[idx].isSelected) {
      dispatch(selectItems(id));
    } else {
      dispatch(deselectItems(id));
    }
    setSelectionStatus((prevState) =>
      prevState.map((item, i) =>
        i === idx ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  return (
    <div
      id="main"
      className="flex gap-5 flex-col relative lg:h-screen h-auto overflow-scroll "
    >
      {cart.length > 0 ? (
        cart.map((item, idx) => (
          <div
            id="item-container"
            className="shadow-md p-4 flex justify-between flex-col rounded-md items-center bg-zinc-100"
            key={item.id}
          >
            <div className="grid grid-cols-4 w-full">
              <div className="flex flex-col flex-1 col-span-2">
                <div className="flex gap-4">
                  <input
                    checked={selectionStatus[idx]?.isSelected}
                    id={item.id}
                    ref={(el) => setRef(idx, el)}
                    type="checkbox"
                    onChange={() => handleSelectItems(item.id, idx)}
                    className="w-fit cursor-pointer"
                  />
                  <div>
                    <Link href={`/`} className="font-bold">
                      {item.product}
                    </Link>
                    <p>P{item.basePrice}</p>
                  </div>
                </div>
              </div>
              <Counter item={item} />
            </div>

            {item.error && (
              <p className=" bg-black bg-opacity-5 px-1 rounded-md text-xs select-none text-red-600 mt-5">
                {item.errMessage}
              </p>
            )}
          </div>
        ))
      ) : (
        <h1 className="font-medium">Cart is empty.</h1>
      )}
    </div>
  );
};
export { CartItems };
