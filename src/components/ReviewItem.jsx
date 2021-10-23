import React from "react";
import { Table, Checkbox } from "semantic-ui-react";


const ReviewItem = () => {
  return (
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
  );
};

export default ReviewItem;
