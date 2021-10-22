import React, { useEffect, useRef } from "react";
import { Header, Container, Form, Button } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import _ from "lodash";
import { Article } from "../modules/apiHelper";
import { useForm } from "react-hook-form";

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

  const options = [
    "World News",
    "Science & Enviroment",
    "Business",
    "Tech",
    "Entertainment",
    "Culture & Health",
    "Sports",
  ];

  useEffect(() => {
    optionsLoop();
  }, []);

  let categoryOptions = [];
  const optionsLoop = () => {
    options.forEach((options) => {
      categoryOptions.push({
        text: options,
        value: _.camelCase(options),
      });
    });
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
          onChange={async (e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="journalist-input"
          placeholder="Journalists"
          name="journalist"
          onChange={async (e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="lede-input"
          placeholder="Lede"
          name="lede"
          onChange={async (e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Group>
          <Form.Select
            data-cy="category-input"
            placeholder="Category"
            options={categoryOptions}
            name="category"
            value={categoryOptions.value}
            onChange={async (e, { name, value }) => {
              setValue(name, value);
            }}
          />
        </Form.Group>
        <Form.TextArea
          data-cy="body-input"
          placeholder="Body"
          name="body"
          onChange={async (e, { name, value }) => {
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
