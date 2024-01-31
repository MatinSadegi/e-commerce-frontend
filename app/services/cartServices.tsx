import axios from "axios";
import { app } from "../api/axios";
import { CartType } from "../types/types";

export async function getCart() {
  const { data } = await app.get("http://localhost:5000/api/cart");
  return data;
}

export async function removeProductFromCart(item: string) {
  const { data } = await app.post(`http://localhost:5000/api/cart/remove`, {
    id: item,
  });
  return data;
}

export async function addToCart(addToCartItems: {
  id: string;
  count: number;
  size: string | (() => React.JSX.Element);
}) {
  const { data } = await app.post(
    "http://localhost:5000/api/cart/add-to-cart",
    addToCartItems
  );
  return data;
}
