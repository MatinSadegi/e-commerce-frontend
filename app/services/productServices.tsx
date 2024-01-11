import axios from "axios";
import { app } from "../api/axios";

export async function getProducts() {
  // try {
  //   const { data } = await axios.get("http://localhost:5000/api/product");
  //   return data;
  // } catch (error:any) {
  //   console.log(error)
  // }
   const {data}  = await app.get("http://localhost:5000/api/product");
   return data;
  // return fetch("http://localhost:5000/api/product", { cache: "no-store" })
  //   .then((res) => res.json())
  //   .then((data) => data);
}

export async function getProductBySlug(slug: string) {
  const { data } = await axios.get(`http://localhost:5000/api/product/${slug}`);
  return data;
}
