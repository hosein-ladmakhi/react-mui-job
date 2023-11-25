import { httpClient } from "../../lib";

export const uploadImage = (formdata: FormData) => httpClient.post(`/upload/image`, formdata) as Promise<string>;
