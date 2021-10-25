const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLES_INDEX":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
