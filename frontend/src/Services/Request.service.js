import Axios from "axios";
import Constants from "./Constants.service";

export default {
  get: async (url) =>{
      const headers = localStorage.getItem("access-token") && localStorage.getItem("access-token") !== "null" ? {"access-token" : localStorage.getItem("access-token")} : {}
      const response = await Axios.get(`${Constants.backendURL}/api${url}`, {headers})
      localStorage.setItem("access-token", response.headers["access-token"] || localStorage.getItem("access-token"))
      return response
  },
  post : async (url, payload) =>{
      const headers = localStorage.getItem("access-token") && localStorage.getItem("access-token") !== "null" ? {"access-token" : localStorage.getItem("access-token")} : {}
      const response = await Axios.post(`${Constants.backendURL}/api${url}`, payload, {headers})
      localStorage.setItem("access-token", response.headers["access-token"] || localStorage.getItem("access-token"))
      return response
  },
  put: async (url, payload) => {
      const headers = localStorage.getItem("access-token") && localStorage.getItem("access-token") !== "null" ? {"access-token" : localStorage.getItem("access-token")} : {}
      const response = await Axios.put(`${Constants.backendURL}/api${url}`, payload, {headers})
      localStorage.setItem("access-token", response.headers["access-token"] || localStorage.getItem("access-token"))
      return response
  },
  delete: async (url) => {
      const headers = localStorage.getItem("access-token") && localStorage.getItem("access-token") !== "null" ? {"access-token" : localStorage.getItem("access-token")} : {}
      const response = await Axios.delete(`${Constants.backendURL}/api${url}`, {headers})
      localStorage.setItem("access-token", response.headers["access-token"] || localStorage.getItem("access-token"))
      return response
  },
};
