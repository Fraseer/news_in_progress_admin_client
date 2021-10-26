import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Container, Form, Button } from "semantic-ui-react";

const EditArticle = () => {
  const { article } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    Article.show(id);
  }, [id]);

  useEffect(() => {
    register("title");
    register("journalist");
    register("lede");
    register("category");
    register("body");
    // eslint-disable-next-line
  }, []);

  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (article) => {
    debugger;
    dispatch({
      type: "SHOW_ARTICLE",
      payload: article,
    });
  };

  return (
    <Container>
      <Form
        size="huge"
        data-cy="edit-article"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Input
          name="title"
          data-cy="edit-title"
          placeholder="Title"
          defaultValue={article?.title}
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="edit-journalist"
          placeholder="Journalists"
          name="journalist"
          defaultValue={article?.authors}
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        <Form.Input
          data-cy="edit-lede"
          placeholder="Lede"
          name="lede"
          defaultValue={article?.lede}
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
        {/* <Form.Select
          data-cy="category-input"
          placeholder="Category"
          options={categoryOptions}
          name="category"
          value={categoryOptions.value}
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        /> */}
        <Form.TextArea
          data-cy="edit-body"
          placeholder="Body"
          name="body"
          defaultValue={article?.body}
          onChange={(e, { name, value }) => {
            setValue(name, value);
          }}
        />
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

export default EditArticle;
