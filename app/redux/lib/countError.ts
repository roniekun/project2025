import { error } from "console";

interface returnType {
  isError: boolean;
  errMessage: string;
}
export function countError(
  quantity: number,
  maxQuantity: number
): returnType | undefined {
  if (quantity > maxQuantity) {
    const error = {
      isError: true,
      errMessage: `You can only purchase allowable quantity of this product.`,
    };
    return error;
  } else return;
}
