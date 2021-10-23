import React from "react";
import { Container, Table, Checkbox } from "semantic-ui-react";

const ReviewArticles = () => {
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
          <Table.Row data-cy="row-1">
            <Table.Cell data-cy="id-1">1</Table.Cell>
            <Table.Cell data-cy="title-1">
              Servicing and repairing electric cars requires new skills
            </Table.Cell>
            <Table.Cell data-cy="journalist-1">Bob Journalist</Table.Cell>
            <Table.Cell data-cy="created-at-1">2021-10-05</Table.Cell>
            <Table.Cell data-cy="published-1">
              <Checkbox slider />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
