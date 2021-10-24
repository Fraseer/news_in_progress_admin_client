import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

const ReviewItem = (reviewItem) => {
  return (
    <Table.Row data-cy={`row-${reviewItem.id}`}>
      <Table.Cell data-cy={`id-${reviewItem.id}`}>{`${reviewItem.id}`}</Table.Cell>
      <Table.Cell data-cy={`title-${reviewItem.id}`}>
      {reviewItem.title}
      </Table.Cell>
      <Table.Cell data-cy={`journalist-${reviewItem.id}`}>{reviewItem.journalist}</Table.Cell>
      <Table.Cell data-cy={`date-${reviewItem.id}`}>{reviewItem.date}</Table.Cell>
      <Table.Cell data-cy={`published-${reviewItem.id}`}>
        <Checkbox slider />
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewItem;
