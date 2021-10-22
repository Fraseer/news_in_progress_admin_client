import axios from "axios";

const Article = {
  async create(article) {
    const params = article;
    const response = await axios.post("/api/articles/", params);
    return response;
  },
};

export { Article };
