import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const routes = ["/", "/about", "/guide", "/feedback"];
  const types = ["Главная", "О проекте", "Инструкция", "Обратная связь"];
  const [active, setActive] = useState("Главная");
  const renderLinks = types.map((type) => (
    <Link
      key={type}
      to={routes[types.indexOf(type)]}
      onClick={() => setActive(type)}
      className={`button button__navBar ${active === type ? "button_idle" : ""}`}
    >
      {type}
    </Link>
  ));

  return (
    <section className="navBar">
      {renderLinks}
    </section>
  );
};
