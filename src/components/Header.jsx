import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Menu as={Link} to={{ pathname: "/" }} inverted data-cy="header">
      <Menu.Item>News In Progress - Admin Site</Menu.Item>
    </Menu>
  );
};

export default Header;
