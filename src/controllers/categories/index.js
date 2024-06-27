import { categoriesFn } from "../../services/categories/index.js";

export const getCategoriesFn = async (req, res) => {
  try {
    const data = await categoriesFn();
    const categoryMap = new Map();
    const results = data?.Theme_Names?.reduce((acc, i) => {
      if (i.CATEGORY && i.CATEGORY !== "null" && !categoryMap.has(i.CATEGORY)) {
        categoryMap.set(i.CATEGORY, true);
        acc.push({
          name: i.CATEGORY,
          query_key: i.QUERYNAME,
          icon: `https://www.onemap.gov.sg/images/themesIcon/${i.ICON}`,
        });
      }
      return acc;
    }, []);
    res
      .status(200)
      .json({ data: results, message: `${results.length} categories found` });
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while searching OneMap" });
  }
};
