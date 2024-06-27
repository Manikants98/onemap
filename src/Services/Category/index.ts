import axiosInstance from "../../Configs/axios";

/**
 * Fetches categories from the API.
 * @returns {Promise<any>} - A promise that resolves with the category data.
 * @throws {Error} - If the request fails, an error is thrown.
 */
export const categoriesFn = async (): Promise<any> => {
  try {
    const { data } = await axiosInstance.get("/get_categories");
    return data;
  } catch (error) {
    throw new Error("Failed to fetch categories");
  }
};
