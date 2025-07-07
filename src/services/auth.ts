export async function login(email: string, password: string) {
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json(); // ✅ read once
  console.log("Login Response:", data);

  if (!res.ok) {
    throw new Error(data.message || "Login failed");
  }
  return data;
}

export async function getUserProfile(token: string) {
  const res = await fetch("https://api.escuelajs.co/api/v1/auth/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Unauthorized");
  }

  return res.json();
}
