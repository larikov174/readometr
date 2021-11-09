import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeIndex, storeText } from '../../features/counter/counterSlice';
import { Timer } from "../timer/Timer";
import { CountWords } from "../countWords/CountWords";
import data from "../../app/data.json";

export const Book = () => {
  const userLevel = useSelector((state) => state.switcher);
  const textData = data[0][userLevel.value];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const textBlock = JSON.stringify(textData[getRandomInt(textData.length)]);
  const dispatch = useDispatch();
  dispatch(storeText(textBlock))

  const onAreaClick = (e) => {
    dispatch(storeIndex(e.target.selectionStart));
  }

  return (
    <section className={"main"}>
      <textarea className="book__textArea" value={textBlock} maxLength={450} onDoubleClick={onAreaClick} readOnly />
      <Timer />
      <CountWords />
    </section>
  );
};
