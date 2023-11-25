import zod from "zod";

export const resumePersonalDetailForm = zod.object({
  jobTitle: zod
    .string({ required_error: "You must provide your job title" })
    .min(3, "Your job title must include 3 character at least"),
  firstName: zod
    .string({ required_error: "You must provide your first name" })
    .min(3, "Your first name must include 3 character at least"),
  lastName: zod
    .string({ required_error: "You must provide your last name" })
    .min(3, "Your last name must include 3 character at least"),
  linkedin: zod.optional(zod.string()),
  github: zod.optional(zod.string()),
  phoneNumber: zod
    .string({
      required_error: "You must provide your phone number",
    })
    .min(11, "Invalid phone number"),
  age: zod.coerce.number({ required_error: "You must provide your age" }).min(1, "You must provide your age"),
  address: zod.optional(zod.string()),
});
