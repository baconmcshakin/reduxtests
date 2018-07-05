import store from "../js/store/index";
import { addArticle } from "../js/actions/index";

import { combineReducers } from "redux";
//export default combineReducers({ test: addArticle });

window.store = store;
window.addArticle = addArticle;
