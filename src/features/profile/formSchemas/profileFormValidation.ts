import zod from "zod";

export const profileFormValidation = zod.object({
  username: zod
    .string({ required_error: "You must provide your username" })
    .min(3, "Your username must include 3 character at least"),
  email: zod
    .string({ required_error: "You must provide your email address" })
    .email({ message: "Your email address include invalid format" }),
  firstName: zod
    .string({ required_error: "You must provide your first name" })
    .min(3, "Your first name must include 8 character at least"),
  lastName: zod
    .string({
      required_error: "You must provide your last name",
    })
    .min(3, "Your last name must include 8 character at least"),
  age: zod.coerce.number({ required_error: "You must provide your age" }).min(1, "You must provide your age"),
  bio: zod.string().optional(),
});
