import { apiConnector } from "../apiConnector";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const signup = async (firstname, lastname, email, password) => {
  try {
    const response = await apiConnector("POST", `${BASE_URL}/user/signup`, {
      firstname: firstname,
      lastname: lastname,
      username: email,
      password: password,
    });

    if (!response.status) {
      throw new Error(response.data.message);
    } else {
      return response.data.message;
    }
  } catch (error) {
    console.log("Signup error...", error.message);
  }
};

export const signin = async (email, password) => {
  try {
    const response = await apiConnector("POST", `${BASE_URL}/user/signin`, {
      username: email,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem("token", JSON.stringify(response.data.token));
      return response.data.token;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Login error...", error.message);
    console.log("Error in login");
  }
};
