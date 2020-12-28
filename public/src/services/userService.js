const API_BASE_URL = process.env.API_BASE_URL;

export const userService = {
  register: async ({ email, password }) => {
    return await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    }).then((res) => {
      return res.json();
    });
  },
  login: async ({ email, password }) => {
    const res = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });
    return res.json();
  }
};
