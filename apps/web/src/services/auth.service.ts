type LoginInput = {
  email: string;
  password: string;
};

export async function loginUser(input: LoginInput) {
  if (input.email === "test@test.com" && input.password === "password") {
    return {
      id: "user-1",
      email: input.email,
      name: "Test User",
    };
  }

  throw new Error("Invalid credentials");
}

export async function signupUser(input: LoginInput) {
  return {
    id: "user-2",
    email: input.email,
    name: "New User",
  };
}
