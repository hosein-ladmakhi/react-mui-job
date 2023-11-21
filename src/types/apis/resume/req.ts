import { EResumeItemType } from ".";

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
