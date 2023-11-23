import { useForm } from "@/hooks";
import { EResumeItemType } from "@/types/apis/resume";
import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";
import zod from "zod";
import { resumePersonalDetailForm } from "../formSchemas/resumePersonalDetailFormValidation";
import { resumeProfessionalExpreinceForm } from "../formSchemas/resumeProfessionalExpreinceFormValidation";
import { resumeProfileForm } from "../formSchemas/resumeProfileFormValidation";
import { resumeSkillForm } from "../formSchemas/resumeSkillFormValidation";

const prepareDefaultValue = (data: any, setValue: UseFormSetValue<any>, type: EResumeItemType) => {
  switch (type) {
    case EResumeItemType.PersonalDetail: {
      setValue("address", data.address || "");
      setValue("age", data.age || 0);
      setValue("firstName", data.firstName || "");
      setValue("lastName", data.lastName || "");
      setValue("linkedin", data.linkedin || "");
      setValue("github", data.github || "");
      setValue("jobTitle", data.jobTitle || "");
      setValue("phoneNumber", data.phoneNumber || "");
      break;
    }
    case EResumeItemType.ProfessionalExprience: {
      setValue("city", data?.city || "");
      setValue("company", data?.company || "");
      setValue("country", data?.country || "");
      setValue("description", data?.description || "");
      setValue("jobTitle", data?.jobTitle || "");
      setValue("start", data?.start ? new Date(data?.start) : new Date());
      setValue("end", data?.end ? new Date(data?.end) : new Date());
      break;
    }
    case EResumeItemType.Profile: {
      setValue("bio", data?.bio || "");
      break;
    }
    case EResumeItemType.Skill: {
      setValue("skill", data?.skill || []);
      break;
    }
  }
};

const prepareFormSchema = (type: EResumeItemType) => {
  switch (type) {
    case EResumeItemType.PersonalDetail: {
      return resumePersonalDetailForm;
    }
    case EResumeItemType.ProfessionalExprience: {
      return resumeProfessionalExpreinceForm;
    }
    case EResumeItemType.Profile: {
      return resumeProfileForm;
    }
    case EResumeItemType.Skill: {
      return resumeSkillForm;
    }
  }
};

export const useResumeSectionItem = (data: any, type: EResumeItemType) => {
  const schema = prepareFormSchema(type);
  const form = useForm<zod.infer<typeof schema>>(schema);

  useEffect(() => {
    prepareDefaultValue(data, form.setValue, type);
  }, [data]);

  return form;
};
