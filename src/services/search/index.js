import { axiosInstance } from "../../configs/index.js";

export const searchFn = async (query) => {
  try {
    const response = await axiosInstance.get(`api/common/elastic/search`, {
      params: { searchVal: query, returnGeom: "Y", getAddrDetails: "Y" },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OneMap:", error.message);
    throw error;
  }
};
