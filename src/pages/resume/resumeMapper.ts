import { EResumeItemType } from "@/types/apis/resume";
import CreatePersonalDetailForm from "./components/resumesSectionItem/CreatePersonalDetailForm";
import CreateProfessionalExpreinceForm from "./components/resumesSectionItem/CreateProfessionalExprienceForm";
import CreateProfileForm from "./components/resumesSectionItem/CreateProfileForm";
import CreateSkillForm from "./components/resumesSectionItem/CreateSkillForm";

export const RESUME_SECTION_MAPPER = {
  [EResumeItemType.PersonalDetail]: CreatePersonalDetailForm,
  [EResumeItemType.ProfessionalExprience]: CreateProfessionalExpreinceForm,
  [EResumeItemType.Profile]: CreateProfileForm,
  [EResumeItemType.Skill]: CreateSkillForm,
};
