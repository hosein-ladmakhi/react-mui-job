import { TUser } from "@/types/models";

export type TSignup = Omit<TUser, "logo">;
