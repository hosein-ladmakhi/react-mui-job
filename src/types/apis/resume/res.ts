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
