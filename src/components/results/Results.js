import React from "react";
import { useSelector } from "react-redux";
import { countWords } from "../countWords/CountWords";
import { Link, useNavigate } from "react-router-dom";

export const Results = () => {
  const navigate = useNavigate();
  const { text, index, user } = useSelector((state) => state.setData);
  const getTotal = countWords(index, text);
  const initDate = new Date();
  const date = `${initDate.getDate()}.${initDate.getMonth()}.${initDate.getFullYear()} в ${initDate.getHours()}:${initDate.getMinutes()}`;

  return (
    <section className="results">
      <h1 className="results__title">Ваши результаты:</h1>
      <ul className="results__list">
        <li className="results__item">
          <p className="results__text">Дата</p>
          <p className="results__text">Имя</p>
          <p className="results__text">Кол-во слов</p>
        </li>
        <li className="results__item">
          <p className="results__text">{date}</p>
          <p className="results__text">{user}</p>
          <p className="results__text">{getTotal}</p>
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