// src/js/actions/index.js
import { GET_DATA } from "../constants/action-types";
import axios from "axios";
export const addArticle = res => ({
  type: GET_DATA,
  payload: res
});

/*
    axios.get("/getdata")
    .then(res => {
        type: GET_DATA,
        payload: res
    })
    .catch(err => {})
});
*/
