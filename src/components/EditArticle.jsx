import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Container, Form, Button, Modal } from "semantic-ui-react";

const EditArticle = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [redirect, setRedirect] = useState(false);
  const [open, setOpen] = useState(false);
  const { article, categories } = useSelector((state) => state);
  const { id } = useParams();
  const delay = require("delay");

  useEffect(() => {
    Article.show(id);
  }, [id]);

  useEffect(() => {
    setSelectedCategory(article.category?.name);
  }, [article]);

  const formattedCategories = categories.map((category) => {
    return { value: category, text: category };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const form = event.target;
    const editedArticle = {
      article: {
        id: id,
        title: form.title.value,
        authors: [form.title.journalist],
        lede:  form.lede.value,
        category: selectedCategory,
        body: form.body.value,
      },
    };
    let response = await Article.update(editedArticle);
    if (response === "You have successfully edited the article") {
      setOpen(true);
    }
    await delay(2000);
    setRedirect(true);
  };

  return (
    <>
      {redirect ? (
        <Redirect to="/review-articles" />
      ) : (
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
              defaultValue={article?.name}
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
      )}
    </>
  );
};

export default EditArticle;
