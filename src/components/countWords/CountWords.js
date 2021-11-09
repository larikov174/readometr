import React, { useState } from "react";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";

export const CountWords = ({ textBlock, selectionIndex, isVisible }) => {

  const [modalVisibleState, setModalVisibleState] = useState(isVisible);
  const modalClose = () => setModalVisibleState(false);
  const index = selectionIndex;
  const text = textBlock;
  const cut = text.slice(0, index).replace(/\.?,?:?-?;?/g, "");
  const regExp = /([а-я]+|[0-9]+|[a-z]+)\s/gi;


  return (
    <PopupWithNote isOpen={modalVisibleState} isCLosed={modalClose}>
      <h2 className="popup__title">
        `Вы успели прочитать: ${cut.match(regExp).length + 1} слов.`
      </h2>
    </PopupWithNote>
  );
};
