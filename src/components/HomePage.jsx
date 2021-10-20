import React from "react";
import { Link } from "react-router-dom";


export const HomePage = () => {
  return (
    <div className="center-postion">
      <Link
        to={{
          pathname: "/create-article",
        }}
      >
        <button className="home-button" data-cy="add-article">Create Article</button>
      </Link>
      <Link
        to={{
          pathname: "/review-articles",
        }}
      >
        <button className="home-button" data-cy="review-articles">Review Articles</button>
      </Link>
    </div>
  );
};

export default HomePage;
