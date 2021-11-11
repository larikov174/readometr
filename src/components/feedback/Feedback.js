import React from "react";
import { Link } from "react-router-dom";

export const Feedback = () => {
  return (
    <section className="guide">
      <h1 className="about__title">Обратная связь:</h1>
      <p className="about__text">
        Если хочешь оставить отзыв о работе приложения в целом, об отдельных
        функциях или у тебя есть предложение как его улучшить, напиши мне об
        этом.
      </p>
      <p className="about__text">
        <span style={{ fontWeight: 600 }}>email:</span>{" "}
        <a href="mailto:larikov@bk.ru">larikov@bk.ru</a>
      </p>
      <Link className="button button__about" to="/">
        &#8592; На главную
      </Link>
    </section>
  );
};
