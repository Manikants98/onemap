import axiosInstance from "../../Configs/axios";

/**
 * Search Locations from the API.
 * @returns {Promise<any>} - A promise that resolves with the Search Locations data.
 * @throws {Error} - If the request fails, an error is thrown.
 */
export const searchLocationsFn = async (search: string): Promise<any> => {
  try {
    const { data } = await axiosInstance.get("/search", { params: { search } });
    return data;
  } catch (error) {
    throw new Error("Failed to Search Locations");
  }
};
