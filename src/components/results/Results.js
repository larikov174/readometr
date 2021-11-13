import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { countWords } from "../countWords/CountWords";
import { Link } from "react-router-dom";
import applause from "../../sounds/applause.mp3";

export const Results = () => {
  const { text, index, user } = useSelector((state) => state.setData);
  const getTotal = countWords(index, text);

  useEffect(()=>{
    const audio= new Audio();
    audio.src = applause;
    audio.play();
  })

  return (
    <section className="results">
      <h1 className="results__title">{user},</h1>
      <h2 className="results__title">твой результат: <span className="results__text">{getTotal}</span></h2>
      <div className="guide__actions">
        <Link className="button button__about" to="/">
          &#8592; На главную
        </Link>
      </div>
    </section>
  );
};
