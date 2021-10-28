import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Container, Form, Button, Modal } from "semantic-ui-react";

const EditArticle = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [open, setOpen] = useState(false);
  const { article, categories } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    Article.show(id);
  }, [id]);

  useEffect(() => {
    setSelectedCategory(article.category_name);
  }, [article]);

  const formattedCategories = categories.map((category) => {
    return { value: category, text: category };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const authors = [form.title.journalist];
    const lede = form.lede.value;
    const category = selectedCategory;
    const body = form.body.value;

    const editedArticle = {
      article: {
        id: id,
        title: title,
        authors: authors,
        lede: lede,
        category: category,
        body: body,
      },
    };
    let response = await Article.update(editedArticle);
    if (response === "You have successfully edited the article") {
      setOpen(true);
    }
  };

  return (
    <Container>
      <Form size="huge" data-cy="edit-article" onSubmit={handleSubmit}>
        <Form.Input
          name="title"
          data-cy="edit-title"
          placeholder="Title"
          defaultValue={article?.title}
        />
        <Form.Input
          data-cy="edit-journalist"
          placeholder="Journalists"
          name="journalist"
          defaultValue={article?.authors}
        />
        <Form.Input
          data-cy="edit-lede"
          placeholder="Lede"
          name="lede"
          defaultValue={article?.lede}
        />
        <Form.Select
          data-cy="category-input"
          placeholder="Category"
          options={formattedCategories}
          name="category"
          value={selectedCategory}
          onChange={(event, data) => {
            setSelectedCategory(data.value);
          }}
        />
        <Form.TextArea
          data-cy="edit-body"
          placeholder="Body"
          name="body"
          defaultValue={article?.body}
        />
        <Button data-cy="submit-btn" type="submit">
          Submit
        </Button>
      </Form>
      <Modal
        basic
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Modal.Content>
          <h1 data-cy="response-message">
            You have successfully edited the article
          </h1>
        </Modal.Content>
      </Modal>
    </Container>
  );
};

export default EditArticle;
