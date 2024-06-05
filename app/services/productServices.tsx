import axios from "axios";
import { app } from "../api/axios";
import { useQuery} from "@tanstack/react-query";

export async function getProducts(queryString: string) {
  const { data } = await app.get(
    `https://e-commerce-backend-cdwe.onrender.com/api/product?${queryString}`
  );
  return data; 
} 
 
export function useGetProducts(queryString: string) {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(queryString),
  });
}

export async function getProductBySlug(slug: string) {
  const { data } = await axios.get(
    `https://e-commerce-backend-cdwe.onrender.com/api/product/${slug}`
  );
  return data;
}

