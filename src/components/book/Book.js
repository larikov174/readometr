import React from "react";
import { useSelector } from "react-redux";
import data from "../../app/data.json";

export const Book = () => {
  const userLevel = useSelector((state) => state.switcher);
  const textBlock = data[0][userLevel.value];
  const getRandomInt = (max) => Math.floor(Math.random() * max);
  const myText = JSON.stringify(textBlock[getRandomInt(textBlock.length)]);
  console.log(data[0][userLevel.value][2]);

  return (
    <section className={"main"}>
      <textarea className="book__textArea" value={myText} maxLength={450} readOnly />
    </section>
  );
};
