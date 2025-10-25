// schemas/auth.ts
import { z } from "zod";

export const emailSchema  = z.string().email({message:"Please enter a valid email address"});
export const passwordSchema  = z.string().min(6, "Password must be at least 6 characters long");
export const nameSchema = z.string( "Name is required").min(1, "Name cannot be empty");


export const SignupSchema = z.object({
  name:nameSchema,
  email:emailSchema,
  password:passwordSchema
});
