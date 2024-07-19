import { apiConnector } from "../apiConnector";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getUsers = async (token, filter) => {
  try {
    const response = await apiConnector(
      "GET",
      `${BASE_URL}/user/bulk`,
      null,
      { Authorization: `Bearer ${token}` },
      { filter: filter }
    );

    if (response.status === 200) {
      return response.data.user;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Getusers error...", error.message);
  }
};

export const getCurrentUser = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      `${BASE_URL}/user/getCurrentUser`,
      null,
      { Authorization: `Bearer ${token}` }
    );

    if (response.status !== 200) {
      throw new Error(response.data.message);
    } else {
      return response.data.currentUser;
    }
  } catch (error) {
    console.log("get user error...", error.message);
  }
};

export const updateCredentials = async (token, updatedData) => {
  try {
    const response = await apiConnector(
      "PUT",
      `${BASE_URL}/user/`,
      updatedData,
      { Authorization: `Bearer ${token}` }
    );

    if (response.status !== 200) {
      throw new Error(response.data.message);
    } else {
      return response.data.message;
    }
  } catch (error) {
    console.log("Update credentials error...", error.message);
  }
};
