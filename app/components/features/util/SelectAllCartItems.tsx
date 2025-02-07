"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import {
  selectAllItems,
  deselectAllItems,
} from "@/app/redux/slices/CheckoutSlice";
import { useState, useEffect, useRef } from "react";
import { GoTrash } from "react-icons/go";
import { SetStateAction, Dispatch } from "react";
import { deleteProducts } from "@/app/redux/slices/CartSlice";

interface Props {
  selectionStatus: { isSelected: boolean }[];
  setSelectionStatus: Dispatch<
    SetStateAction<
      {
        isSelected: boolean;
      }[]
    >
  >;
  setDeleteId: Dispatch<SetStateAction<string>>;
}

const SelectAllCartItems = ({
  selectionStatus,
  setSelectionStatus,
  setDeleteId,
}: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const [isAllSelected, setAllSelected] = useState<boolean>();
  const inputCheckRef = useRef<HTMLInputElement | null>(null);
  const selectedItems = useAppSelector((state) => state.checkout);

  useEffect(() => {
    cart.forEach((item) => item.quantity === 0 && setDeleteId(item.id));
  }, [cart]);

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

    useEffect(() => {
      // const isAllSelected = selectionStatus.every(
      //   (stat) => stat.isSelected === true
      // );
  
      const booleanResult = cart.every((item) => selectedItems.includes(item.id));
      setAllSelected(booleanResult);
    }, [selectionStatus]);

  const handleDeleteAllItems = () => {
    dispatch(deleteProducts(selectedItems));
    dispatch(deselectAllItems());
  };
  const selectedCount = selectedItems.length;

  return (
    <div>
      {cart.length > 0 && (
        <div className="relative w-full flex justify-between rounded-md shadow-md p-4 bg-zinc-100 ">
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
                Select all ({cart.length} {cart.length > 1 ? "items" : "item"})
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
    </div>
  );
};
export default SelectAllCartItems;
