import { useMutation } from "@tanstack/react-query";
import { authSignin, authSignup } from "../../services/auth";

export const useLoginAuth = () => {
  const { isSuccess, isPending, mutateAsync } = useMutation({
    mutationFn: authSignin,
  });

  return { isSuccess, isLoading: isPending, mutateAsync };
};

export const useSignupAuth = () => {
  const { isSuccess, isPending, mutateAsync } = useMutation({
    mutationFn: authSignup,
  });

  return { isSuccess, isLoading: isPending, mutateAsync };
};
