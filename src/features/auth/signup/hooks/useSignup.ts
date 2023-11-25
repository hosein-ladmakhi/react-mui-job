import { useMutation } from "@tanstack/react-query";
import { authSignup } from "../services";

export const useSignupAuth = () => {
  const { isSuccess, isPending, mutateAsync } = useMutation({
    mutationFn: authSignup,
  });

  return { isSuccess, isLoading: isPending, mutateAsync };
};
