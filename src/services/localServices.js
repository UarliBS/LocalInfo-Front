import axios from "axios";
import API_URL from "./api";

export function searchLocals(categoria) {
  const response = axios.get(`${API_URL}/planofree/search`, {
    params: { categoria },
  });
  return response;
}
