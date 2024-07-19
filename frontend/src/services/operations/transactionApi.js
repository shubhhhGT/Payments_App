import { apiConnector } from "../apiConnector";
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getBalance = async (token) => {
  try {
    const response = await apiConnector(
      "GET",
      `${BASE_URL}/account/balance`,
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );

    if (response.status === 200) {
      return response.data.balance;
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    console.log("Getbalance error...", error.message);
  }
};

export const sendMoney = async (amount, to, token) => {
  try {
    const response = await apiConnector(
      "POST",
      `${BASE_URL}/account/transfer`,
      { amount, to },
      { Authorization: `Bearer ${token}` }
    );
    if (response.status !== 200) {
      throw new Error(response.data.message);
    } else {
      return response.data.message;
    }
  } catch (error) {
    console.log("Send money error...", error.message);
  }
};
