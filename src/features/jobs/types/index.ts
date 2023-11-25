import { TCompany } from "@/features/companies/types";

export enum JobLevel {
  Senior = "Senior",
  Midlevel = "Midlevel",
  Junior = "Junior",
  Chief = "Chief",
  Intern = "Intern",
}

export type TJob = {
  id: number;
  title: string;
  salary: number;
  level: JobLevel[];
  country: string;
  provience: string;
  tags: string[];
  description: string;
  company: TCompany;
  createdAt: Date;
  category?: TJobCategory;
};

export type TJobs = TJob[];

export type TJobCategory = {
  name: string;
  parent?: TJobCategory;
  childrens: TJobCategory[];
  id: number;
};

export type TCategories = TJobCategory[];
