import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Results = () => {
  const navigate = useNavigate();
  return (
    <section className="guide">
      <h1 className="about__title">Ваши результаты:</h1>
      <ul className="guide__list">
        <li className="about__text">Укажите свое имя</li>
        <li className="about__text">Выбери подходящий уровень сложности</li>
        <li className="about__text">
          По истечении одной минуты выдели слово где остановился(ась).
        </li>
        <li className="about__text">
          Нажми на кнопку "Узнать результат" в меню наверху страницы.
        </li>
      </ul>
      <div className="guide__actions">
      <Link className="button button__about" to="/">
        &#8592; На главную
      </Link>
      <button className="button button__guide" onClick={() => navigate(-1)}>
        Назад
      </button>
      </div>
    </section>
  );
};
