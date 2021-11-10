import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";

export const CountWords = ({ textBlock }) => {
  const { index } = useSelector((state) => state.counter);
  const cut = textBlock.slice(0, index).replace(/\.?,?:?-?;?/g, "");
  const regExp = /([а-я]+|[0-9]+|[a-z]+)\s/gi;
  const result = () => {
    if (cut.match(regExp) !== null) {
      return cut.match(regExp).length + 1;
    }
    return 1;
  };
  const [popupOpened, setPopupOpened] = useState(false);
  const modalClose = () => setPopupOpened(false);

  return (
    <PopupWithNote isOpen={popupOpened} isCLosed={modalClose}>
      <h2 className="popup__title">Твой результат: {result()}</h2>
    </PopupWithNote>
  );
};
