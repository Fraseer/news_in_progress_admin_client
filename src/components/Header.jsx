import React from "react";
import { Link } from "react-router-dom";
import { Image, Menu, MenuItem } from "semantic-ui-react";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <Menu
      as={Link}
      to={{
        pathname: "/",
      }}
      widths="1"
    >
      <MenuItem className="site-name" data-cy="header">
        <Image src={logo} size="small" />
        - Admin Site
      </MenuItem>
    </Menu>
  );
};

export default Header;
