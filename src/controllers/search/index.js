import { searchFn } from "../../services/search/index.js";

export const searchLocationFn = async (req, res) => {
  const { search } = req.query;

  if (!search) {
    return res.status(400).json({ error: "Search parameter is required" });
  }
  try {
    const data = await searchFn(search);
    const results = data?.results;
    res.json({
      data: results?.map((i) => ({
        name: i.SEARCHVAL,
        address: i.ADDRESS,
        latitude: Number(i.LATITUDE),
        longitude: Number(i.LONGITUDE),
      })),
      message: `${data?.found} search results found.`,
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching OneMap" });
  }
};
