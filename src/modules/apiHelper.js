import axios from "axios";

const Article = {
  async create(article) {
    const params =  article;
    // eslint-disable-next-line
    const response = await axios.post("/api/articles/", params);
  },
};

export { Article };
