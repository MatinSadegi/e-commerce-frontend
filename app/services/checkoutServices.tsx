import { app } from "../api/axios";

export async function checkout() {
  const { data } = await app.get(`http://localhost:5000/api/checkout`);
  return data;
}
