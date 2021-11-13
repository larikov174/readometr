import React from "react";
import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="about">
      <h1 className="about__title">Привет!</h1>
      <p className="about__text">
        Ты на странице проекта, который помогает быстро подсчитать количество прочитанных слов за 1 минуту.
      </p>
      <p className="about__text">
        Весь функционал доступен бесплатно для использования и предоставляется автором в образовательных целях.
      </p>
      <p className="about__text">
        Веб сайт полностью адаптивен к мобильным устройствам и позволяет комфортно посещать его с разных устройств.
      </p>
      <p className="about__text">Надеюсь данное приложение окажется для тебя полезным!</p>
      <Link className="button button__about" to="/">
        &#8592; На главную
      </Link>
    </section>
  );
};
