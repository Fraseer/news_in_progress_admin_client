import axios from "axios";
import store from "../state/store/configureStore";

const Article = {
  async create(article) {
    const params = { article: article };
    try {
      const response = await axios.post("/api/articles/", params, {
      });
      store.dispatch({
        type: "SET_ARTICLE_CREATE",
        payload: { message: response.data.message },
      });
    } catch (error) {
      errorHandler(error);
    }
  },
};

const errorHandler = (error) => {
  if (error.response.status) {
    // store.dispatch({
    //   type: "ERROR_MESSAGE",
    //   payload:
    //     "We are sorry! Your request can not be processed at this time. Try again later",
    // });
  } else {
    // store.dispatch({
    //   type: "ERROR_MESSAGE",
    //   payload: error.message,
    // });
  }
};

export { Article };
