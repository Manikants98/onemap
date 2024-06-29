import axios from "axios";

const baseURL = "https://www.onemap.gov.sg/";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzN2I1NTMwM2VjNzk5NjAyY2Y4Y2U4N2M5YTBjYjA5ZSIsImlzcyI6Imh0dHA6Ly9pbnRlcm5hbC1hbGItb20tcHJkZXppdC1pdC0xMjIzNjk4OTkyLmFwLXNvdXRoZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tL2FwaS92Mi91c2VyL3Nlc3Npb24iLCJpYXQiOjE3MTk2ODY4MTYsImV4cCI6MTcxOTk0NjAxNiwibmJmIjoxNzE5Njg2ODE2LCJqdGkiOiI1cW1MRWRCWDdvOW1uU1RZIiwidXNlcl9pZCI6Mzk0MSwiZm9yZXZlciI6ZmFsc2V9.-2k78KP30suliXkHbx4FE0h6u5ZnVRilJMxkQUYDf9I",
  },
});
