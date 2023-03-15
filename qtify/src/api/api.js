//https://qtify-backend-labs.crio.do/albums/top
import axios from "axios";

const BACKEND_URL = "https://qtify-backend-labs.crio.do";

export const fetchTopSongs = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/albums/top`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
