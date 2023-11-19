import { httpClient } from "../../lib";
import { TAuthResponse } from "../../types/apis/auth";
import { TLogin, TSignup, TUser } from "../../types/models";

export const authSignup = (data: TSignup) =>
   httpClient.post("/auth/signup", data) as Promise<TAuthResponse>;

export const authSignin = (data: TLogin) =>
   httpClient.post("/auth/login", data) as Promise<TAuthResponse>;

export const getUser = () => httpClient.get("/user/current") as Promise<TUser>;
