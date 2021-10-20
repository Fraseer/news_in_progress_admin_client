import React from "react";
import { Link } from "react-router-dom";
import { Menu, MenuItem } from "semantic-ui-react";

const Header = () => {
  return (
    <Menu
      inverted
      as={Link}
      to={{
        pathname: "/",
      }}
      widths="1"
    >
      <MenuItem className="siteName" data-cy="header">
        News In Progress - Admin Site
      </MenuItem>
    </Menu>
  );
};

export default Header;
