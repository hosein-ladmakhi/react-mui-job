import { TUser } from "@/types/general";

export type TSignup = Omit<TUser, "logo">;

export type TAuthResponse = {
  token?: string;
};
