import api from "../../service/api";
import { GET_USER_LIST } from "./actionTypes";

export const getMemberList = () => ({
  type: GET_USER_LIST,
  payload: api.get("/api/?results=50")
});
