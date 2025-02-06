"use server";
import { SignUpFormSchema } from "@/app/lib/types";

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
