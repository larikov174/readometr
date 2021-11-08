import React from 'react';

function Main({ isOpen, onButtonClick }) {
  return (
    <section className={`main ${isOpen && 'visible'}`}>
      <h1 className="main__title">Привет!</h1>
      <p className="main__text">
        Ты на странице проекта, который помогает быстро подсчитать количество прочитанных слов за 1
        минуту.
      </p>
      <p className="main__text">Инструкция по использованию очень простая:</p>
      <ul className="main__list">
        <li className="main__text">Выбери подходящий уровень сложности</li>
        <li className="main__text">Нажми на кнопку начать и приготовься читать</li>
        <li className="main__text">
          По истечении одной минуты кликни два раза левой кнопкой мыши по слову где
          остановился\остановилась.
        </li>
        <li className="main__text">
          В диалоговом окне введи своем имя, чтобы сохранить свой результат.
        </li>
      </ul>
      <div className="main__option">
        <p className="main__text main__select_caption">Сложность:</p>
        <select className="main__select" required>
          <option name="beginner">дети 7-13 лет</option>
          <option name="advanced">остальные читатели</option>
        </select>
        <button className="main__button" type="button" onClick={onButtonClick}>
          начать
        </button>
      </div>
    </section>
  );
}

export default Main;
