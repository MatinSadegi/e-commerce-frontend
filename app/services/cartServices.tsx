import { app } from "../api/axios";
import { useQuery } from "@tanstack/react-query";


export async function getCart() {
  const { data } = await app.get("http://localhost:5000/api/cart");
  return data;
}

export function useGetCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    retry: false,
  });
}

export async function removeProductFromCart({
  size,
  productId,
  count,
}: {
  size: string;
  productId: string;
  count: number;
}) {
  const { data } = await app.post(`http://localhost:5000/api/cart/remove`, {
    id: productId,
    size,
    count,
  });
  return data;
}


export async function addToCart(addToCartItems: {
  id: string | undefined;
  count: number;
  size: string | (() => React.JSX.Element);
}) {
  const { data } = await app.post(
    "http://localhost:5000/api/cart/add-to-cart",
    addToCartItems
  );
  return data;
}
 