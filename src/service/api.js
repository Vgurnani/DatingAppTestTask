import axios from "axios";

export default axios.create({
  baseURL: "https://randomuser.me/",
  withCredentials: false,
  crossDomain: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
});
