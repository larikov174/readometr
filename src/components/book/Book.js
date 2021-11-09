import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { storeData } from "../../features/counter/counterSlice";
import { Timer } from "../timer/Timer";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";
import data from "../../app/data.json";

export const Book = () => {
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const modalClose = () => setModalVisibleState(false);
  const userLevel = useSelector((state) => state.switcher);
  const textData = data[0][userLevel.value];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const textBlock = JSON.stringify(textData[getRandomInt(textData.length)]);
  const onSelect = () => setModalVisibleState(true);
  // const countWords = () => {
  //   const cut = textBlock.slice(0, onSelect).replace(/\.?,?:?-?;?/g, "");
  //   const regExp = /([а-я]+|[0-9]+|[a-z]+)\s/gi;
  //   setPopupOpen(true);
  //   return cut.match(regExp).length + 1;
  // }

  return (
    <>
      <section className={"main"}>
        <textarea
          className="book__textArea"
          value={textBlock}
          maxLength={450}
          onDoubleClick={onSelect}
          readOnly
        />
        <Timer />
      </section>
      <PopupWithNote isOpen={modalVisibleState} isCLosed={modalClose}>
        <h2 className="popup__title">`Вы успели прочитать: ... слов.`</h2>
      </PopupWithNote>
    </>
  );
};
