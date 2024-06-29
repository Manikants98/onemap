import { axiosInstance } from "../../configs/index.js";

export const authenticationFn = async ({ email, password }) => {
  try {
    const response = await axiosInstance.post(`api/auth/post/getToken`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OneMap:", error);
    throw error;
  }
};
