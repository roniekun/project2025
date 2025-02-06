"use client";
import { useAppSelector, useAppDispatch } from "@/app/redux/hooks/hooks";
import { RiSubtractLine } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OrderSummary from "./OrderSummary";
import {
  selectItems,
  deselectItems,
  selectAllItems,
  deselectAllItems,
} from "@/app/redux/slices/CheckoutSlice";

import {
  addCount,
  deleteProducts,
  addCustomCount,
  reduceCount,
} from "@/app/redux/slices/CartSlice";
import { RootState } from "@/app/redux/store";

const CartItems = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const targetRefs = useRef<HTMLInputElement[]>([]);
  const inputCheckRef = useRef<HTMLInputElement | null>(null);
  const s = (state: RootState) => state.checkout;
  const selectedItems = useAppSelector(s);

  const [selectionStatus, setSelectionStatus] = useState<
    { isSelected: boolean }[]
  >([]);

  useEffect(() => {
    setSelectionStatus(cart.map(() => ({ isSelected: false })));
  }, [cart]);

  useEffect(() => {
    console.log(selectionStatus);
  }, [selectionStatus]);

  useEffect(() => {
    setSelectionStatus(cart.map(() => ({ isSelected: false })));
  }, [cart]);

  function setRef(idx: number, el: HTMLInputElement | null) {
    if (el) {
      targetRefs.current[idx] = el;
    }
  }
  const isAllSelected = selectionStatus.every(
    (stat) => stat.isSelected === true
  );
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

  // Function select all items
  const handleSelectAllItems = () => {
    const cartItemsID = cart.map((item) => item.id);

    if (!isAllSelected) {
      dispatch(selectAllItems(cartItemsID));
      setSelectionStatus((prevState) =>
        prevState.map((stat) => ({ ...stat, isSelected: true }))
      );
    } else {
      dispatch(selectAllItems(cartItemsID));
      setSelectionStatus((prevState) =>
        prevState.map((stat) => ({ ...stat, isSelected: false }))
      );
      // selectedItems.forEach(item=> dispatch(deselectItems(item)))
      dispatch(deselectAllItems());
    }
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deselectAllItems());
    dispatch(deleteProducts([id]));
  };

  const handleDeleteAllItems = () => {
    dispatch(deleteProducts(selectedItems));
    dispatch(deselectAllItems());
  };

  const selectedCount = selectedItems.length;

  useEffect(() => {
    console.log(`selected items: ${selectedItems}`);
  }, [selectedItems, selectionStatus]);

  return (
    <div className="grid lg:grid-cols-2 gap-5">
      <div>
        {cart.length > 0 && (
          <div className="relative w-full flex justify-between rounded-md shadow-md p-4 bg-zinc-100">
            <div className="flex-row flex gap-1">
              <input
                checked={isAllSelected}
                ref={inputCheckRef}
                type="checkbox"
                onChange={handleSelectAllItems}
                className="cursor-pointer"
              />
              {selectedItems.length > 0 ? (
                <p>
                  Selected Items ({selectedCount}{" "}
                  {selectedCount > 1 ? "items" : "item"})
                </p>
              ) : (
                <p>
                  Select all ({cart.length} {cart.length > 1 ? "items" : "item"}
                  )
                </p>
              )}
            </div>
            <button
              onClick={handleDeleteAllItems}
              className="text-sm flex gap-1 items-center justify-center font-bold text-nowrap text-zinc-700"
            >
              Delete <GoTrash size={16} />
            </button>
          </div>
        )}
        <div
          id="main"
          className="flex gap-5 flex-col relative lg:h-screen h-auto overflow-scroll"
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
                        const newCount = Number(e.target.value);
                        if (!isNaN(newCount)) {
                          dispatch(
                            addCustomCount({ id: item.id, count: newCount })
                          );
                        }
                      }}
                      className="flex text-center bg-transparent border border-black h-full w-[3ch] px-1 focus:outline-none"
                    />
                    <button
                      onClick={() => dispatch(addCount(item.id))}
                      className="border relative h-full w-full px-3 justify-center items-center border-black"
                    >
                      <IoAddSharp
                        className="cursor-pointer "
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="text-sm flex gap-1 items-center justify-center font-bold text-nowrap text-zinc-700"
                  >
                    <GoTrash size={16} />
                  </button>
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
      </div>
      <div>
        <OrderSummary />
      </div>
    </div>
  );
};
export { CartItems };
