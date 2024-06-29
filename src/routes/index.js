import { Router } from "express";
import { getCategoriesFn } from "../controllers/categories/index.js";
import { searchLocationFn } from "../controllers/search/index.js";
import { locationByCategoryFn } from "../services/categories/index.js";
import { getAuthTokenFn } from "../controllers/authentication/index.js";

const router = Router();

router.get("/search", searchLocationFn);

router.get("/categories", getCategoriesFn);

router.post("/authentication", getAuthTokenFn);

router.get("/location-by-category", async (req, res) => {
  const { query_key } = req.query;
  const data = await locationByCategoryFn(query_key);
  const results = data?.SrchResults?.filter((i) => i.NAME)?.map((i) => ({
    name: i.NAME,
    latitude: Number(i.LatLng.split(",")[0]),
    longitude: Number(i.LatLng.split(",")[1]),
  }));
  res.json({ data: results, message: `${results.length} locations found` });
});

export default router;
