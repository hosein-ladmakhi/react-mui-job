import zod from "zod";

export const resumeSkillForm = zod.object({
  skill: zod.array(zod.string()),
});
