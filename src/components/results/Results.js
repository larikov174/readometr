import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Results = () => {
  const navigate = useNavigate();
  return (
    <section className="results">
      <h1 className="results__title">Ваши результаты:</h1>
      <ul className="results__list">
        <li className="results__item">
          <p className="results__text">date</p>
          <p className="results__text">name</p>
          <p className="results__text">quantity</p>
        </li>
        <li className="results__item">
          <p className="results__text">date</p>
          <p className="results__text">name</p>
          <p className="results__text">quantity</p>
        </li>
        <li className="results__item">
          <p className="results__text">date</p>
          <p className="results__text">name</p>
          <p className="results__text">quantity</p>
        </li>
        <li className="results__item">
          <p className="results__text">date</p>
          <p className="results__text">name</p>
          <p className="results__text">quantity</p>
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
