import axios from "axios";
import config from "../config.json";
export const getUser = async () => {
  console.log("getting users");
  try {
    const response = await axios(`${config.apiURL}/users`, {
      method: "GET",
    });
    return response;
  } catch (e) {
    console.log("Error getting users");
  }
};
