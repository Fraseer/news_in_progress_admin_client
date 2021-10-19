import React from "react";
import { Menu as header } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link
      to={{
        pathname: "/",
      }}
    >
      <header className="siteName" inverted data-cy="header">
        News In Progress - Admin Site
      </header>
    </Link>
  );
};

export default Header;
