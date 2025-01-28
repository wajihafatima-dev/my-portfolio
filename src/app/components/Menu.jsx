import React from "react";
import NavLink from "./NavLink";

const Menu = ({ links }) => {
  return (
    <ul className="flex flex-col items-center ">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;