import axios from "axios";

const Article = {
  async create(article) {
    try {
      const response = await axios.post(`/api/articles/`, {
        params: {
          articles: {
            title: article.title,
            journalist: article.journalist,
            lede: article.lede,
            category: article.category,
            date: article.date,
            body: article.body,
            published: false,
          },
        },
      });
    } catch (error) {}
  },
};

export { Article };
