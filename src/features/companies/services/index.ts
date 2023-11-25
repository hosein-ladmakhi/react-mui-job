import { httpClient } from "@/lib";
import { TCompanies } from "../types";

export const getCompanies = () => httpClient.get("/company") as Promise<TCompanies>;
