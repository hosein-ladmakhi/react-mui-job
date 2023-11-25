import zod from "zod";
export const resumeProfileForm = zod.object({
  bio: zod
    .string({ required_error: "You must provide your bio" })
    .min(70, "Your bio must include 70 character at least"),
});
