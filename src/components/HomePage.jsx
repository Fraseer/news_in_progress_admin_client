import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <>
      <Button
        data-cy="add-article"
        as={Link}
        to={{
          pathname: "/create-article",
        }}
      >
        Create Article
      </Button>
      <Button
        data-cy="review-articles"
        as={Link}
        to={{
          pathname: "/review-articles",
        }}
      >
        Review Articles
      </Button>
    </>
  );
};

export default HomePage;
