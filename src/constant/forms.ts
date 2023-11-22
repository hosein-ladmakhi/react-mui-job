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
   age: zod.coerce
      .number({ required_error: "You must provide your age" })
      .min(1, "You must provide your age"),
   bio: zod.string().optional(),
});

export const loginFormValidation = zod.object({
   email: zod
      .string({ required_error: "You must provide your email address" })
      .email({ message: "Your email address include invalid format" }),
   password: zod
      .string({ required_error: "You must provide your password" })
      .min(8, "Your password must include 8 character at least"),
});

export const signupFormValidation = profileFormValidation.extend({
   password: zod
      .string({ required_error: "You must provide your password" })
      .min(8, "Your password must include 8 character at least"),
});

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
   age: zod.coerce
      .number({ required_error: "You must provide your age" })
      .min(1, "You must provide your age"),
   address: zod.optional(zod.string()),
});

export const resumeProfileForm = zod.object({
   bio: zod
      .string({ required_error: "You must provide your bio" })
      .min(70, "Your bio must include 70 character at least"),
});

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

export const createNewResumeForm = zod.object({
   name: zod
      .string({ required_error: "You must provide your resume name" })
      .min(3, "Your resume name must include 3 character at least"),
});

export const skillResumeForm = zod.object({
   skill: zod.array(zod.string()),
});
