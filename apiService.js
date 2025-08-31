export const contactUser = async (baseUrl, endpoint, userData) => {
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to register");
    }

    return data;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw new Error(
      error.message || "Something went wrong during registration"
    );
  }
};