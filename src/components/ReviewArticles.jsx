import React from "react";
import { Container, Table } from "semantic-ui-react";
import ReviewItem from "./ReviewItem";

const ReviewArticles = () => {

  //create axios get request


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
        <Table.Body>
          <ReviewItem />
        </Table.Body>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
