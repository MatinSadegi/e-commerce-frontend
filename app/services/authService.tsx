import axios from "axios";
import { FormDataTypes } from "../types/types";

export async function register(formData: FormDataTypes) {
  const { data } = await axios.post(
    "http://localhost:5000/api/user/register",
    formData
  );
  return data;
}
export async function login(formData: Partial<FormDataTypes>) {
  const { data } = await axios.post(
    "http://localhost:5000/api/user/login",
    formData,
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
  return data;
}
