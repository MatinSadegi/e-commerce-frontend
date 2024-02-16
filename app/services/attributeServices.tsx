import { app } from "../api/axios";
export async function getAttributes() {
  const { data } = await app.get("http://localhost:5000/api/attributes");
  return data;
}
