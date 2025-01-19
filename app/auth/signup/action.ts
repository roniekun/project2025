"use server";
import { SignUpFormSchema } from "@/lib/types";

export async function signup(state, formData) {
  const validationResults = SignUpFormSchema.safeparse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validationResults.sucess) {
    error: validationResults.error.flatten().fieldErrors;
  }
}
