import zod from "zod";

export const createNewResumeForm = zod.object({
  name: zod
    .string({ required_error: "You must provide your resume name" })
    .min(3, "Your resume name must include 3 character at least"),
});
