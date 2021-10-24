import axios from "axios";

const Article = {
  async create(article) {
    article["article"]["author_ids"] = []
    const params = article;
    const response = await axios.post("/api/articles/", params);
    return response;
  },

  async index() {
    let response = await axios.get("/api/articles")
    return response.data.articles
  }
};

export { Article };
