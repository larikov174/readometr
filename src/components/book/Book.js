import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeIndex } from "../../features/counter/counterSlice";
import { Timer } from "../timer/Timer";
import { CountWords } from "../countWords/CountWords";
import data from "../../app/data.json";

export const Book = () => {
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const { value } = useSelector((state) => state.switcher);
  const textBlocks = data[0][value];
  const textBlock = JSON.stringify(textBlocks[getRandomInt(textBlocks.length)]);
  const dispatch = useDispatch();
  const state = false;
  const onAreaClick = (e) => dispatch(storeIndex(e.target.selectionStart));

  return (
    <section className={"main"}>
      <textarea
        className="book__textArea"
        value={textBlock}
        maxLength={450}
        onDoubleClick={onAreaClick}
        readOnly
      />
      <Timer />
      <CountWords textBlock={textBlock} state={state}/>
    </section>
  );
};
