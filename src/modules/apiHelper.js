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

  async show(articleId) {
    let response = await axios.get(`/api/articles/${articleId}`);
    store.dispatch({
      type: "SHOW_ARTICLE",
      payload: response.data.article,
    });
  },

  async update(articleId) {
    let response = await axios.put(`/api/articles/${articleId}`);
    return response
  },
};

export { Article };
