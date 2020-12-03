import Axios from "axios";
import Constants from "./Constants.service";

export default {
  get: async (url) => {
    return await Axios.get(`${Constants.backendURL}/api${url}`);
  },
};
