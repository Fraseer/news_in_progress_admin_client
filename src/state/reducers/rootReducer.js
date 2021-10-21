const rootReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLE_CREATE":
      return {
        ...state,
        submit: action.payload.status,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
export default rootReducer;
