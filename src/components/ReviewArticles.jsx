import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Container, Table } from "semantic-ui-react";
import ReviewItem from "./ReviewItem";

const ReviewArticles = () => {
  const { articles } = useSelector((state) => state);

  useEffect(() => {
    Article.index();
  }, []);

  let reviewList = articles.map((reviewItem) => {
    return <ReviewItem reviewItem={reviewItem} key={reviewItem.id} />;
  });
  return (
    <Container>
      <Table data-cy="review-table" compact celled color="black" >
        <Table.Header data-cy="table-headers">
          <Table.HeaderCell data-cy="id">Article ID</Table.HeaderCell>
          <Table.HeaderCell data-cy="title">Title</Table.HeaderCell>
          <Table.HeaderCell data-cy="journalist">Journalist</Table.HeaderCell>
          <Table.HeaderCell data-cy="created-at">Created At</Table.HeaderCell>
          <Table.HeaderCell data-cy="published">
            Published Status
          </Table.HeaderCell>
        </Table.Header>
        <Table.Body data-cy="review-table-body">{reviewList}</Table.Body>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
