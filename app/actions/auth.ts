"use server";

export const SignUpAction = async (formData: FormData) => {
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const email = formData.get("email");
  const passoword = formData.get("password");
  const dateCreated = formData.get("date");

  console.log("helo");
};
