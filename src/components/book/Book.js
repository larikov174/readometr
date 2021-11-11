import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";
import { countWords } from "../countWords/CountWords";
import { Timer } from "../timer/Timer";

export const Book = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [result, setResult] = useState("");
  const modalClose = () => setPopupOpened(false);
  const { text } = useSelector((state) => state.setData);
  const onAreaClick = (e) => {
    const index = e.target.selectionStart;
    setResult(countWords(index, text));
    setPopupOpened(true);
  };

  return (
    <>
      <section className={"main"}>
        <Timer />
        <textarea
          className="book__textArea"
          value={text}
          maxLength={450}
          onDoubleClick={onAreaClick}
          readOnly
        />
        <PopupWithNote isOpen={popupOpened} isClosed={modalClose}>
          <h2 className="popup__title">Твой результат: {result}</h2>
        </PopupWithNote>
      </section>
    </>
  );
};
