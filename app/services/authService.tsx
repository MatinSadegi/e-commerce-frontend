
import { useQuery } from "@tanstack/react-query";
import { app } from "../api/axios";
import { FormDataTypes } from "../types/types";
import { AddressTypes } from "../(dashboard)/profile/Addresses";

export async function register(formData: FormDataTypes) {
  const { data } = await app.post(
    "https://e-commerce-backend-cdwe.onrender.com/api/user/register",
    formData
  );
  return data;
}
export async function login(formData: Partial<FormDataTypes>) {
  const { data } = await app.post(
    "http://localhost:5000/api/user/login",
    formData
  );
  return data;
} 

export async function getProfile() {
  const { data } = await app.get(
    "https://e-commerce-backend-cdwe.onrender.com/api/user/profile"
  );
  return data
}

export function useGetProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: () => getProfile(),
    retry:false
  });
} 


export async function addNewAddress(formData: AddressTypes) {
  const { data } = await app.post(
    "https://e-commerce-backend-cdwe.onrender.com/api/user/address",
    formData
  );
  return data;
} 


export async function logout() {
  const { data } = await app.post(
    "https://e-commerce-backend-cdwe.onrender.com/api/user/logout"
  );
  return data;
}