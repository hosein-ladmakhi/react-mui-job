import { httpClient } from "../../lib";
import {
   TAddNewResumeItemBody,
   TCreateResumeBody,
   TEditResumeBody,
   TResume,
   TResumeItem,
   TResumes,
} from "../../types/apis/resume";
import { TObject } from "../../types/general";

export const createResume = (data: TCreateResumeBody) =>
   httpClient.post("/resume", data) as Promise<TResume>;

export const getResumes = () => httpClient.get("/resume") as Promise<TResumes>;

export const getResume = (id: number) =>
   httpClient.get(`/resume/${id}`) as Promise<TResume>;

export const editResume = (id: number, data: TEditResumeBody) =>
   httpClient.patch(`/resume/${id}`, data) as Promise<TResume>;

export const deleteResume = (id: number) =>
   httpClient.delete(`/resume/${id}`) as Promise<boolean>;

export const addResumeItem = (data: TAddNewResumeItemBody) =>
   httpClient.post(`/resume/item`, data) as Promise<TResume>;

export const addDataToResumeItem = (data: TObject) =>
   httpClient.patch("/resume/item/data", data) as Promise<TResumeItem>;

export const deleteResumeItemById = (id: number) =>
   httpClient.delete(`/resume/item/${id}`) as Promise<boolean>;
