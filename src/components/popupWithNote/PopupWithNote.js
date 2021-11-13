import React from "react";

export const PopupWithNote = ({ isOpen, isClosed, children }) => {
  return (
    <>
      <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <form className="popup__container" name="cardDeleteForm" action="#">
          <div className="popup__window">
            <button className="popup__close-button" type="button" name="closePopup" onClick={isClosed} />
            <h1 className="about__title">Время истекло!</h1>
            <div className="popup__image" alt="Будильник звенит"></div>
            <h2 className="about__title">А сейчас:</h2>
            <ul className="guide__list">
              <li className="about__text">Нажми кнопку далее.</li>
              <li className="about__text">Выдели последнее прочитанное слово в тексте.</li>
              <li className="about__text">Нажми на кнопку "Подсчитать" в меню наверху страницы.</li>
            </ul>
            <button className="button button__main" type="button" onClick={isClosed}>
              Далее...
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
