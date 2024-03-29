import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getCart, removeProductFromCart } from "../services/cartServices";

const queryClient = useQueryClient();

export function useGetCart() {
  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
}

export const useRemoveFromCart = useMutation({
  mutationFn: removeProductFromCart,
});
