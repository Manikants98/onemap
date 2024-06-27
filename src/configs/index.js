import axios from "axios";

const baseURL = "https://www.onemap.gov.sg/";

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization:
      "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzN2I1NTMwM2VjNzk5NjAyY2Y4Y2U4N2M5YTBjYjA5ZSIsImlzcyI6Imh0dHA6Ly9pbnRlcm5hbC1hbGItb20tcHJkZXppdC1pdC0xMjIzNjk4OTkyLmFwLXNvdXRoZWFzdC0xLmVsYi5hbWF6b25hd3MuY29tL2FwaS92Mi91c2VyL3Bhc3N3b3JkIiwiaWF0IjoxNzE5MzMwNzMwLCJleHAiOjE3MTk1ODk5MzAsIm5iZiI6MTcxOTMzMDczMCwianRpIjoibHNXb01LWmxsY25CTmJRVSIsInVzZXJfaWQiOjM5NDEsImZvcmV2ZXIiOmZhbHNlfQ.GuFw6rQ2iYc5hNJ0XuiovIObGR3DRYn-0Od3Hf6c1eM",
  },
});
