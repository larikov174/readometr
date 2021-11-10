import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/about" className="button button__navBar">
        О проекте
      </Link>
      <Link to="/instruction" className="button button__navBar">
        Инструкция
      </Link>
      <Link to="/feedback" className="button button__navBar">
        Обратная связь
      </Link>
    </div>
  );
};
