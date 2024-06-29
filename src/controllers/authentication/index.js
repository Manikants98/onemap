import { authenticationFn } from "../../services/authentication/index.js";

export const getAuthTokenFn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await authenticationFn({ email, password });
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error });
  }
};
