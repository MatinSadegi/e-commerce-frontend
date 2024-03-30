import { app } from "../api/axios";

export async function checkout() {
  const { data } = await app.get(
    `https://e-commerce-backend-cdwe.onrender.com/api/checkout`
  );
  return data;
}
