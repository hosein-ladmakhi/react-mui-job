import { TCategory } from "../category";
import { TCompany } from "../company";

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
   category?: TCategory;
};

export type TJobs = TJob[];
