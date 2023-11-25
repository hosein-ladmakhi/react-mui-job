import { TObject } from "@/types/general";

export type TResumeSectionProps = {
  formClass: string;
  data: TObject;
  mutate: any;
  id: number;
};

export type TCreateResumeBody = {
  name: string;
};

export type TEditResumeBody = {
  name?: string;
};

export type TCreateResumeItemBody = {
  type: EResumeItemType;
  data: any;
  resume: number;
  id?: number;
};

export type TAddNewResumeItemBody = {
  type: EResumeItemType;
  resume: number;
};

export enum EResumeItemType {
  Profile = "Profile",
  ProfessionalExprience = "ProfessionalExprience",
  Skill = "Skill",
  PersonalDetail = "PersonalDetail",
}

export type TResume = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  resumeItems: TResumeItem[];
};

export type TResumeItem = {
  id: number;
  resume: TResume;
  type: EResumeItemType;
  data: any;
};

export type TResumes = TResume[];

export type TResumeItems = TResumeItem[];
