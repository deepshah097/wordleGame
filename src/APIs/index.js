import http from "../utils/http";

export const validateWord = async (word) => {
  try {
    const res = await http.post(`/validate`, { guess: word });
    const result = await res.json();
    return result;
  } catch (error) {
    return null;
  }
};
