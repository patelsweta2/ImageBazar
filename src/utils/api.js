import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const UNSPLASH_TOKEN = "ZeKh9-WpbZgluzDpPdqtJ5LEPO81EVrGSliEBhWCdlY";
if (!UNSPLASH_TOKEN) {
  throw new Error(
    "Unsplash token is missing. Check your environment variables."
  );
}

const headers = {
  Authorization: "Client-ID " + UNSPLASH_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const response = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data from Unsplash API:", error);
    return error;
  }
};
