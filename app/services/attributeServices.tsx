import { useQuery } from "@tanstack/react-query";
import { app } from "../api/axios";
export async function getAttributes() {
  const { data } = await app.get(
    "https://e-commerce-backend-cdwe.onrender.com/api/attributes"
  );
  return data;
}
export function useGetAttributes() {
  return useQuery({
    queryKey: ["attributes"],
    queryFn: () => getAttributes(),
  });
}