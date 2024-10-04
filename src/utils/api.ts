export const login = async (
  email: string,
  password: string
): Promise<string | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Assuming the API returns a token in the response
    } else {
      throw new Error("Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
};

interface PostData {
  title: string;
  description: string;
  post_type: string;
  category: string;
  source: string;
}

export const createPost = async (
  formData: PostData,
  token: string
): Promise<void> => {
  try {
    const response = await fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`, // Include the token in the Authorization header
      },
      body: JSON.stringify(formData),
    });
    const data = response.json();
    if (!response.ok) {
      throw new Error("Failed to create post");
    }

    // console.log("Post created successfully");
    alert("Post createed succesfully");
  } catch (error) {
    console.error("Create post error:", error);
  }
};

export const logout = async (token: string): Promise<string | null> => {
  try {
    const response = await fetch("http://localhost:3000/api/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data.token; // Assuming the API returns a token in the response
    } else {
      throw new Error("Logout failed");
    }
  } catch (error) {
    console.error("Logout error:", error);
    return null;
  }
};
