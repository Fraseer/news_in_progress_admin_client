import React, { useState } from "react";
import { Header, Container, Form, Button } from "semantic-ui-react";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import "react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css";

const CreateArticle = () => {
  const [currentDate, setNewDate] = useState(null);
  const onChange = (event, data) => setNewDate(data.value);

  const category_options = [
    { key: 1, text: "World News", value: "worldNews" },
    { key: 2, text: "Science & Enviroment", value: "scienceEnviroment" },
    { key: 3, text: "Business", value: "business" },
    { key: 4, text: "Tech", value: "tech" },
    { key: 5, text: "Entertainment", value: "entertainment" },
    { key: 6, text: "Culture & Health", value: "cultureHealth" },
    { key: 7, text: "Sports", value: "sports" },
  ];

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
        <Form.Input  data-cy="title-input" placeholder="Title" />
        <Form.Input
          
          data-cy="journalist-input"
          placeholder="Journalists"
        />
        <Form.Input  data-cy="lede-input" placeholder="Lede" />
        <Form.Group>
          <Form.Select
            
            data-cy="category-input"
            placeholder="Category"
            options={category_options}
          />
          <SemanticDatepicker onChange={onChange} />
        </Form.Group>
        <Form.TextArea  data-cy="body-input" placeholder="Body" />
        <Button data-cy="submit-button">Submit</Button>
      </Form>
    </Container>
  );
};

export default CreateArticle;
