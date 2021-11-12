import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <section className="navBar">
      <Link to="/about" className="button button__navBar">
        О проекте
      </Link>
      <Link to="/guide" className="button button__navBar">
        Инструкция
      </Link>
      <Link to="/feedback" className="button button__navBar">
        Обратная связь
      </Link>
    </section>
  );
};
