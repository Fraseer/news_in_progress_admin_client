import React from "react";
import { Container, Form, Button, Modal } from "semantic-ui-react";



const EditPage = () => {
  
  return (
    <Container>

      <Form size="huge" data-cy="edit-article">
        <Form.Input
          name="title"
          data-cy="title-input"
          placeholder="Title"
        >
        </Form.Input>
        <Form.Input
          data-cy="journalist-input"
          placeholder="Journalists"
          name="journalist"
        />
        <Form.Input data-cy="lede-input" placeholder="Lede" name="lede" />
        <Form.Select
          data-cy="category-input"
          placeholder="Category"
          name="category"
        />
        <Form.TextArea data-cy="body-input" placeholder="Body" name="body" />
        <Button data-cy="submit-button" type="submit">
          Submit
        </Button>
      </Form>
      {/* <Modal
        basic
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        size="small"
      >
        <Modal.Content>
          <h1 data-cy="article-edited">
            You have successfully edited the article
          </h1>
        </Modal.Content>
      </Modal> */}
    </Container>
  );
};

export default EditPage;
