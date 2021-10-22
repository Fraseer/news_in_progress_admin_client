import axios from "axios";

const Article = {
  async create(article) {
    const params = { article: article };
    const response = await axios.post("/api/articles/", params, {});
  },
};

export { Article };
