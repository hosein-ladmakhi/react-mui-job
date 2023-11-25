import { httpClient } from "@/lib";
import { TUser } from "@/types/general";

export const getUser = () => httpClient.get("/user/current") as Promise<TUser>;

export const updateUser = (data: Partial<TUser>) => httpClient.patch("/user", data) as Promise<boolean>;
