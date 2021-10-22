import React, { useEffect } from "react";
import { Header, Container, Form, Button } from "semantic-ui-react";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import _ from "lodash";
import { Article } from "../modules/apiHelper";
import { useForm } from "react-hook-form";

const CreateArticle = () => {
  useEffect(() => {
    register("name");
  }, []);

  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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

  useEffect(() => {
    Article.create();
  }, []);

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
          name="name"
          data-cy="title-input"
          placeholder="Title"
          onChange={async (e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input data-cy="journalist-input" placeholder="Journalists" />
        <Form.Input data-cy="lede-input" placeholder="Lede" />
        <Form.Group>
          <Form.Select
            data-cy="category-input"
            placeholder="Category"
            options={categoryOptions}
            value={categoryOptions.value}
          />
        </Form.Group>
        <Form.TextArea data-cy="body-input" placeholder="Body" />
        <Button data-cy="submit-button" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateArticle;
