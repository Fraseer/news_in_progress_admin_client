import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Article } from "../modules/apiHelper";
import { Table, Container } from "semantic-ui-react";
import ReviewItem from "./ReviewItem";
import _ from "lodash";

const ReviewArticles = () => {
  const { articles } = useSelector((state) => state);
  const dispatch = useDispatch();

  const uniqueCategories = () => {
    let categories = articles.map((article) => {
      return article.category_name;
    });
    dispatch({ type: "SET_CATEGORIES", payload: _.uniq(categories) });
  };

  useEffect(() => {
    Article.index();
  }, []);

  useEffect(() => {
    uniqueCategories();
    // eslint-disable-next-line
  }, [articles]);

  let reviewList = articles.map((reviewItem) => {
    return <ReviewItem reviewItem={reviewItem} key={reviewItem.id} />;
  });
  return (
    <Container>
      <Table data-cy="review-table" compact celled color="black">
        <Table.Header data-cy="table-headers">
          <Table.Row>
            <Table.HeaderCell data-cy="id">Article ID</Table.HeaderCell>
            <Table.HeaderCell data-cy="title">Title</Table.HeaderCell>
            <Table.HeaderCell data-cy="journalist">Journalist</Table.HeaderCell>
            <Table.HeaderCell data-cy="created-at">Created At</Table.HeaderCell>
            <Table.HeaderCell data-cy="published">
              Published Status
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body data-cy="review-table-body">{reviewList}</Table.Body>
      </Table>
    </Container>
  );
};

export default ReviewArticles;
