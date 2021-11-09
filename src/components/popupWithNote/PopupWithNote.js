import React from "react";

export const PopupWithNote = ({ isOpen, isClosed, children }) => {
  console.log(isOpen);
  return (
    <>
      <div className={`popup ${isOpen?'popup_opened': ''}`}>
        <form
          className="popup__container popup__container_data"
          name="cardDeleteForm"
          action="#"
        >
          <div className="popup__window">
            <button
              className="popup__close-button"
              type="button"
              name="closePopup"
              onClick={isClosed}
            />
            {children}
            <button
              className="popup__submit-button"
              type="button"
              name="submitPopup"
              onClick={isClosed}
            >
              Закрыть окно
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
