import { TUser } from "@/types/general";

export type TLogin = Pick<TUser, "email" | "password">;

export type TAuthResponse = {
  token?: string;
};
