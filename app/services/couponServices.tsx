import { app } from "../api/axios";

export async function applyCoupon(coupon: { coupon: string | undefined }) {
  const { data } = await app.post(
    `https://e-commerce-backend-cdwe.onrender.com/api/coupon/apply-coupon`,
    coupon
  );
  return data;
}
