"use server";

export async function create(formData: FormData) {
  const email = formData.get("email");
  console.log(email);
}
