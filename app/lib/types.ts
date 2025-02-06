import { z } from "zod";

export const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be 2 or more characters long" })
    .max(15, { message: "Name must not exceeds 15 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5).max(20),
});

// type SignUpFormSchema = z.infer<typeof SignUpFormSchema>;
