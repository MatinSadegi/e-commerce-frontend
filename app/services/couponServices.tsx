import { app } from "../api/axios";

export async function applyCoupon(coupon: { coupon: string | undefined }) {
  const { data } = await app.post(
    `http://localhost:5000/api/coupon/apply-coupon`,
    coupon
  );
  return data;
}
