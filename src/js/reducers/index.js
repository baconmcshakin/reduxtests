import { GET_DATA } from "../constants/action-types";
const initialState = {
  articles: []
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, articles: [...state.articles, action.payload] }; //push article to copy of state's article array
    default:
      return state;
  }
};
export default rootReducer;
