import axios from "axios";

const Article = {
  async create(article) {
    article["article"]["author_ids"] = []
    const params = article;
    const response = await axios.post("/api/articles/", params);
    return response;
  },
};

export { Article };
