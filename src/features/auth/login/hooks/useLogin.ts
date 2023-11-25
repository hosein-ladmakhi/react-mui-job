import { useMutation } from "@tanstack/react-query";
import { authSignin } from "../services";

export const useLoginAuth = () => {
  const { isSuccess, isPending, mutateAsync } = useMutation({
    mutationFn: authSignin,
  });

  return { isSuccess, isLoading: isPending, mutateAsync };
};
