import { useAppDispatch, useAppSelector } from "@/app/redux/hooks/hooks";
import { deselectAllItems } from "@/app/redux/slices/CheckoutSlice";
import { deleteProducts, addCount } from "@/app/redux/slices/CartSlice";
import { Dispatch, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DeleteProps {
  setDeleteId: Dispatch<SetStateAction<string>>;
  id: string;
}

const DeleteItem: React.FC<DeleteProps> = ({ setDeleteId, id }) => {
  //   const selectedItems = useAppSelector((state) => state.checkout);
  const cart = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();
  const handleDeleteItem = (id: string) => {
    setDeleteId("");
    dispatch(deselectAllItems());
    dispatch(deleteProducts([id]));
  };

  const handleCancelDelete = (id: string) => {
    cart.forEach((item) => item.id === id && dispatch(addCount(id)));
    setDeleteId("");
  };
  return (
    <div className="fixed top-0 left-0 w-screen h-screen justify-center item-center flex  z-10 flex-col ">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative rounded-xl py-5 overflow-hidden w-fit self-center shadow-2xl flex-col flex justify-center items-center bg-black bg-opacity-50 gap-3 px-10 opacity-0 backdrop-blur-xl"
        >
          <p className="w-fit font-bold">Delete Item?</p>
          <div className="flex gap-2">
            <button
              onClick={() => handleCancelDelete(id)}
              className="text-sm flex gap-1 items-center justify-center font-bold text-nowrap w-fit  cursor-pointer border rounded-full px-3 py-2"
            >
              Cancel
            </button>
            <button
              onClick={() => handleDeleteItem(id)}
              className="text-sm flex gap-1 items-center justify-center font-bold text-nowrap w-fit text-red-600 cursor-pointer border rounded-full px-3 py-2"
            >
              Delete
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default DeleteItem;
