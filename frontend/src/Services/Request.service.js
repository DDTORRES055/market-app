import Axios from "axios";
import Constants from "./Constants.service";

export default {
  get: async (url) => {
    return await Axios.get(`${Constants.backendURL}/api${url}`);
  },
  post: async (url, data) => {
    return await Axios.post(`${Constants.backendURL}/api${url}`, data);
  },
  put: async (url, data) => {
    return await Axios.put(`${Constants.backendURL}/api${url}`, data);
  },
};
