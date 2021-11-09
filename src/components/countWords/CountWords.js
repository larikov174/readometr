import React, { useState } from "react";
import { useSelector } from "react-redux";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";

export const CountWords = () => {
  const getData = useSelector((state) => state.counter);
  const index = getData.index;
  const text = getData.text;
  const cut = text.slice(0, index).replace(/\.?,?:?-?;?/g, "");
  const regExp = /([а-я]+|[0-9]+|[a-z]+)\s/gi;
  const [popupOpened, setPopupOpened] = useState(false);
  const modalClose = () => setPopupOpened(false);
  console.log(`${cut.match(regExp).length + 1}`);

  return (
    <PopupWithNote isOpen={popupOpened} isCLosed={modalClose}>
      <h2 className="popup__title">`Вы успели прочитать: ${cut.match(regExp).length + 1} слов.`</h2>
    </PopupWithNote>
  );
};
