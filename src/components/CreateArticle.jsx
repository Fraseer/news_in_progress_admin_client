import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Header, Container, Form, Button } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import { Article } from "../modules/apiHelper";
import CategoryList from "./CategoryList";

const CreateArticle = () => {
  useEffect(() => {
    register("title");
    register("journalist");
    register("lede");
    register("category");
    register("body");
  }, []);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (article) => {
    Article.create({ article });
  };

  return (
    <Container>
      <Header
        className="center-postion"
        data-cy="page-header"
        size="huge"
        inverted
      >
        Create Article
      </Header>
      <Form
        size="huge"
        data-cy="create-article"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Input
          name="title"
          data-cy="title-input"
          placeholder="Title"
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="journalist-input"
          placeholder="Journalists"
          name="journalist"
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="lede-input"
          placeholder="Lede"
          name="lede"
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <CategoryList />
        <Form.TextArea
          data-cy="body-input"
          placeholder="Body"
          name="body"
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Button data-cy="submit-button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateArticle;
