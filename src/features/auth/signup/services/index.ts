import { httpClient } from "@/lib";
import { TAuthResponse, TSignup } from "../types";

export const authSignup = (data: TSignup) => httpClient.post("/auth/signup", data) as Promise<TAuthResponse>;
