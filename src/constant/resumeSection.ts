import CreatePersonalDetailForm from "@components/resumes/resumesSectionItem/CreatePersonalDetailForm";
import CreateProfessionalExpreinceForm from "@components/resumes/resumesSectionItem/CreateProfessionalExprienceForm";
import CreateProfileForm from "@components/resumes/resumesSectionItem/CreateProfileForm";
import { EResumeItemType } from "@/types/apis/resume";
import CreateSkillForm from "@components/resumes/resumesSectionItem/CreateSkillForm";

export const RESUME_SECTION_MAPPER = {
   [EResumeItemType.PersonalDetail]: CreatePersonalDetailForm,
   [EResumeItemType.ProfessionalExprience]: CreateProfessionalExpreinceForm,
   [EResumeItemType.Profile]: CreateProfileForm,
   [EResumeItemType.Skill]: CreateSkillForm,
};
