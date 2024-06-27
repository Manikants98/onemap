import { axiosInstance } from "../../configs/index.js";

export const categoriesFn = async () => {
  try {
    const response = await axiosInstance.get(
      `api/public/themesvc/getAllThemesInfo`,
      { params: { moreInfo: "Y" } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OneMap:", error);
    throw error;
  }
};

export const locationByCategoryFn = async (queryName) => {
  try {
    const response = await axiosInstance.get(
      `api/public/themesvc/retrieveTheme`,
      { params: { queryName } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data from OneMap:", error);
    throw error;
  }
};
