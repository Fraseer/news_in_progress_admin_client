import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

const ReviewItem = ({ reviewItem }) => {

  return (
    <Table.Row data-cy={`row-${reviewItem.id}`} textAlign="center">
      <Table.Cell 
        data-cy={`id-${reviewItem.id}`}
      >{`${reviewItem.id}`}</Table.Cell>
      <Table.Cell data-cy={`title-${reviewItem.id}`} textAlign="left">
        {reviewItem.title}
      </Table.Cell>
      <Table.Cell data-cy={`journalist-${reviewItem.id}`} textAlign="left">
        {reviewItem.journalists}
      </Table.Cell>
      <Table.Cell data-cy={`created-at-${reviewItem.id}`}>
        {reviewItem.created_at}
      </Table.Cell>
      <Table.Cell data-cy={`published-${reviewItem.id}`}>
        <Checkbox toggle  defaultChecked={reviewItem.published} />
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewItem;
