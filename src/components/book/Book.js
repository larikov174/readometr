import React from "react";
import { useSelector } from "react-redux";
import { Timer } from "../timer/Timer";
import data from "../../app/data.json";

export const Book = () => {
  const userLevel = useSelector((state) => state.switcher);
  const textData = data[0][userLevel.value];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const textBlock = JSON.stringify(textData[getRandomInt(textData.length)]);

  return (
    <section className={"main"}>
      <textarea
        className="book__textArea"
        value={textBlock}
        maxLength={450}
        readOnly
      />
      <Timer />
    </section>
  );
};
