import React from "react";
import { Container, Table } from "semantic-ui-react";

const ReviewArticles = () => {
  return (
    <Container>
      <Table data-cy="review-table" compact celled>
        <Table.Header data-cy="table-headers">
          <Table.HeaderCell data-cy="title">Title</Table.HeaderCell>
          <Table.HeaderCell data-cy="journalist">Journalist</Table.HeaderCell>
          <Table.HeaderCell data-cy="lede">Lede</Table.HeaderCell>
          <Table.HeaderCell data-cy="category">Category</Table.HeaderCell>
          <Table.HeaderCell data-cy="body">Body</Table.HeaderCell>
          <Table.HeaderCell data-cy="published">
            Published Status
          </Table.HeaderCell>
        </Table.Header>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
