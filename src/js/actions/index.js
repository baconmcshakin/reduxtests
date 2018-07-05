// src/js/actions/index.js
import { GET_DATA } from "../constants/action-types";
import axios from "axios";
export const addArticle = () => dispatch => {
  axios
    .get("/getdata/")
    .then(res2 => {
      dispatch({
        type: GET_DATA,
        payload: res2
      });
    })
    .catch(err => {});
};

/*
    axios.get("/getdata")
    .then(res => {
        type: GET_DATA,
        payload: res
    })
    .catch(err => {})
});
*/
