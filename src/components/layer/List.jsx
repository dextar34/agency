import React from "react";
import { Link } from "react-router-dom";
import cn from "../../lib/cn";

const List = ({ items,className,inputs }) => {
  return (
    <ul className={cn(className)}>
      {items.map((item, index) => (
        <Link
          to={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
        >
          <li className={cn(inputs)} key={index}>{item}</li>
        </Link>
      ))}
    </ul>
  );
};

export default List;
