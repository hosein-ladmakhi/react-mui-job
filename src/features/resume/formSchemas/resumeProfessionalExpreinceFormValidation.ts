import zod from "zod";

export const resumeProfessionalExpreinceForm = zod.object({
  jobTitle: zod
    .string({ required_error: "You must provide your job title" })
    .min(3, "Your job title must include 3 character at least"),
  company: zod
    .string({ required_error: "You must provide your company" })
    .min(3, "Your company must include 3 character at least"),
  country: zod
    .string({ required_error: "You must provide your country" })
    .min(3, "Your country must include 3 character at least"),
  city: zod
    .string({ required_error: "You must provide your city" })
    .min(3, "Your city must include 3 character at least"),
  description: zod
    .string({ required_error: "You must provide your description" })
    .min(50, "Your description must include 50 character at least"),
  start: zod.coerce.date({
    required_error: "You must provide your start date",
  }),
  end: zod.coerce.date({
    required_error: "You must provide your end date",
  }),
});
