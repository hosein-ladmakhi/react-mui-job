import { TUser } from "@/types/models";

export type TLogin = Pick<TUser, "email" | "password">;
