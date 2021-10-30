import axios from "axios";
import store from "../state/store/configureStore";

const Article = {
  async create(article) {
    article["article"]["author_ids"] = [];
    const params = article;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
    const response = await axios.post("/api/articles/", params, headers);
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
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
    let response = await axios.get(`/api/articles/${articleId}`, headers);
    store.dispatch({
      type: "SHOW_ARTICLE",
      payload: response.data.article,
    });
  },

  async update(article) {
    const params = article;
    const headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"))
    let response = await axios.put(`/api/articles/${article.article.id}`, params, headers);
    return response.data.message;
  },
};

export { Article };
