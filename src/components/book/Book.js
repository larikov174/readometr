import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Timer } from "../timer/Timer";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";
import { countWords } from "../countWords/CountWords";

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
      <Timer />
      <section className={"main"}>
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
