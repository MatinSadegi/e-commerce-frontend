
import { app } from "../api/axios";

export async function getCart() {
  const { data } = await app.get(`http://localhost:5000/api/cart`);
  return data;
}
