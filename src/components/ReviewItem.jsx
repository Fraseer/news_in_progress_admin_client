import React, {useState} from "react";
import { Table, Checkbox } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Article } from "../modules/apiHelper";

const ReviewItem = ({ reviewItem }) => {
  const [publishedStatus, setPublishedStatus] = useState(false);

  const changePublished = (publishedStatus) => {
    setPublishedStatus(true)

    Article.update(publishedStatus)

  }

  return (
    <Table.Row data-cy={`row-${reviewItem.id}`} textAlign="center">
      <Table.Cell
        data-cy={`id-${reviewItem.id}`}
      >{`${reviewItem.id}`}</Table.Cell>
      <Table.Cell textAlign="left">
        <Link
          data-cy={`title-${reviewItem.id}`}
          to={{ pathname: `/edit-article/${reviewItem.id}` }}
        >
          {reviewItem.title}
        </Link>
      </Table.Cell>
      <Table.Cell data-cy={`journalist-${reviewItem.id}`} textAlign="left">
        {reviewItem.authors.name}
      </Table.Cell>
      <Table.Cell data-cy={`created-at-${reviewItem.id}`}>
        {reviewItem.created_at}
      </Table.Cell>
      <Table.Cell data-cy={`published-${reviewItem.id}`}>
        <Checkbox
          toggle
          defaultChecked={reviewItem.published}
          onClick={() => changePublished}
        />
      </Table.Cell>
    </Table.Row>
  );
};

export default ReviewItem;
