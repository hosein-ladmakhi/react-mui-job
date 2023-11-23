import { httpClient } from "../../lib";
import { TCompanies } from "../../types/apis/company";

export const getCompanies = () => httpClient.get("/company") as Promise<TCompanies>;
