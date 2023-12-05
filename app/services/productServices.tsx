import axios from "axios";

export async function getProducts() {
  const {data}= await axios.get("http://localhost:5000/api/product");
  return data
}
