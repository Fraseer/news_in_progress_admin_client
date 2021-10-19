import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link
      to={{
        pathname: "/",
      }}
    >
      <header className="siteName" data-cy="header">
        News In Progress - Admin Site
      </header>
    </Link>
  );
};

export default Header;
