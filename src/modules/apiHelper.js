import axios from "axios";
import store from "../state/store/configureStore";

const Article = {
  async create(article) {
    article["article"]["author_ids"] = [];
    const params = article;
    const response = await axios.post("/api/articles/", params);
    return response;
  },

  async index() {
    let response = await axios.get("/api/articles");
    store.dispatch({
      type: "SET_ARTICLES_INDEX",
      payload: response.data.articles,
    });
  },
};

export { Article };
