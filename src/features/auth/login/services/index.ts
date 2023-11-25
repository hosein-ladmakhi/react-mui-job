import { httpClient } from "@/lib";
import { TLogin, TAuthResponse } from "../types";

export const authSignin = (data: TLogin) => httpClient.post("/auth/login", data) as Promise<TAuthResponse>;
