import { profileFormValidation } from "@/features/profile/formSchemas/profileFormValidation";
import zod from "zod";

export const signupFormValidation = profileFormValidation.extend({
  password: zod
    .string({ required_error: "You must provide your password" })
    .min(8, "Your password must include 8 character at least"),
});
