import { REACT_APP_API_URL } from "./config";

export const headers = () => {
  return {
    "Content-Type": "application/json",
    // Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "X-DOMAIN": `${window.localStorage.getItem("client")}`, // Add  x-domain
    // Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`, // Add token
  };
};

export default {
  get: async (path) => {
    return await fetch(REACT_APP_API_URL + path, {
      mode: "cors",
      headers: headers(),
    });
  },
  post: async (path, body, options) => {
    return await fetch(REACT_APP_API_URL + path, {
      mode: "cors",
      headers: options?.headers || headers(),
      body: JSON.stringify(body),
      method: "POST",
    });
  },
  put: async (path, body, options) => {
    return await fetch(REACT_APP_API_URL + path, {
      mode: "cors",
      headers: options?.headers ?? headers(),
      body: JSON.stringify(body),
      method: "PUT",
    });
  },

  delete: async (path, options) => {
    return await fetch(REACT_APP_API_URL + path, {
      mode: "cors",
      headers: options?.headers ?? headers(),
      method: "DELETE",
    });
  },
};
