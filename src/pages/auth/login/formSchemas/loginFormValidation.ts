import zod from "zod";

export const loginFormValidation = zod.object({
  email: zod
    .string({ required_error: "You must provide your email address" })
    .email({ message: "Your email address include invalid format" }),
  password: zod
    .string({ required_error: "You must provide your password" })
    .min(8, "Your password must include 8 character at least"),
});
