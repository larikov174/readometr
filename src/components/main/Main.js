import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { levelChanged } from "../../features/switcher/switcherSlice";
import { Link } from "react-router-dom";

export const Main = () => {
  const [value, setValue] = useState("");
  const onOptionChanged = (e) => setValue(e.target.value);
  const dispatch = useDispatch();
  const onButtonClicked = () => value && dispatch(levelChanged(value));
  const isInteractive = value === "" ? "none" : "all";

  return (
    <section className={"main"}>
      <h1 className="main__title">Привет!</h1>
      <p className="main__text">
        Ты на странице проекта, который помогает быстро подсчитать количество прочитанных слов за 1 минуту.
      </p>
      <p className="main__text">Инструкция по использованию очень простая:</p>
      <ul className="main__list">
        <li className="main__text">Выбери подходящий уровень сложности</li>
        <li className="main__text">Нажми на кнопку начать и приготовься читать</li>
        <li className="main__text">
          По истечении одной минуты кликни два раза левой кнопкой мыши по слову где остановился\остановилась.
        </li>
        <li className="main__text">В диалоговом окне введи своем имя, чтобы сохранить свой результат.</li>
      </ul>
      <div className="main__option">
        <p className="main__text main__select_caption">Сложность:</p>
        <select className="main__select" onChange={onOptionChanged} required>
          <option value=""></option>
          <option key={0} value="beginner">
            дети 7-13 лет
          </option>
          <option key={1} value="advanced">
            остальные читатели
          </option>
        </select>
        <Link
          className={`main__button ${isInteractive === "none" ? "main__button_idle" : ""}`}
          style={{ pointerEvents: isInteractive }}
          to="countdown"
          onClick={onButtonClicked}>
          Начать
        </Link>
      </div>
    </section>
  );
};
