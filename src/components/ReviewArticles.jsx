import React, { useState, useEffect } from "react";
import { Container, Table } from "semantic-ui-react";
import ReviewItem from "./ReviewItem";
import { Article } from "../modules/apiHelper";

const ReviewArticles = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    (async () => {
      let articles = await Article.index().then((articles) => {
        // setArticles(response);
        debugger;
        let reviewList = articles.map((reviewItem) => {
          debugger;
          return <ReviewItem reviewItem={reviewItem} key={reviewItem.id} />;
        });
      });
    })();
  }, []);


  return (
    <Container>
      <Table data-cy="review-table" compact celled>
        <Table.Header data-cy="table-headers">
          <Table.HeaderCell data-cy="id">Article ID</Table.HeaderCell>
          <Table.HeaderCell data-cy="title">Title</Table.HeaderCell>
          <Table.HeaderCell data-cy="journalist">Journalist</Table.HeaderCell>
          <Table.HeaderCell data-cy="created-at">Created At</Table.HeaderCell>
          <Table.HeaderCell data-cy="published">
            Published Status
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body>{reviewList}</Table.Body>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
