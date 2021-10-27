import React, { useEffect } from "react";
import { useParams } from "react-router";
// import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Container, Form, Button } from "semantic-ui-react";

const EditArticle = () => {
  const { article, categories } = useSelector((state) => state);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    Article.show(id);
  }, [id]);

  // useEffect(() => {
  //   register("title");
  //   register("journalist");
  //   register("lede");
  //   register("category");
  //   register("body");
  //   // eslint-disable-next-line
  // }, []);

  // const { register, handleSubmit, setValue } = useForm({defaultValues: {
  //   title: article?.title
  // }});

  const formattedCategories = categories.map((category, index) => {
    return { key: index, value: category, text: category };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    debugger;
    const form = event.target;
    const title = form.title.value;
    const lede = form.lede.value;
    const category = form.category.value;
    const body = form.body.value;
    // dispatch({
    //   type: "SHOW_ARTICLE",
    //   payload: article,
    // });
    // Article.update(article);
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
          defaultValue={article?.category}
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
