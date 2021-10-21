import React, { useState, useEffect } from "react";
import { Header, Container, Form, Button } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";
import _ from "lodash";

const CreateArticle = () => {
  // eslint-disable-next-line no-unused-vars
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);

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
      <Form size="huge" data-cy="create-article">
        <Form.Input data-cy="title-input" placeholder="Title" />
        <Form.Input data-cy="journalist-input" placeholder="Journalists" />
        <Form.Input data-cy="lede-input" placeholder="Lede" />
        <Form.Group>
          <Form.Select
            data-cy="category-input"
            placeholder="Category"
            options={categoryOptions}
          />
          <SemanticDatepicker onChange={onChange} />
        </Form.Group>
        <Form.TextArea data-cy="body-input" placeholder="Body" />
        <Button data-cy="submit-button">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateArticle;
