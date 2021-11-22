import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInitText } from "../../features/setData/getInitText";
import { saveText, saveUser } from "../../features/setData/dataSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.setData);
  const [optionValue, setOptionValue] = useState("");
  const [inputValue, setInputValue] = useState(user);
  const onOptionChanged = (e) => setOptionValue(e.target.value);
  const onInputChanged = (e) => setInputValue(e.target.value);
  const onButtonClicked = () => {
    dispatch(saveText(getInitText(optionValue)));
    dispatch(saveUser(inputValue));
  };
  const isInteractive = optionValue === "" || inputValue === "" ? "none" : "all";

  return (
    <section className={"main"}>
      <div className="main__option">
        <h1 className="main__title">Чтобы начать:</h1>
        <nav className="main__nav">
          <label htmlFor="nameInput" className="main__text">
            Введи имя:
          </label>
          <input type="text" id="nameInput" className="main__input" defaultValue={inputValue} onChange={onInputChanged} maxLength="30"/>
        </nav>
        <nav className="main__nav">
          <label htmlFor="selectLevel" className="main__text">
            Сложность:
          </label>
          <select className="main__input" id="selectLevel" onChange={onOptionChanged}>
            <option value=""></option>
            <option key={0} value="beginner">
              дети до 12 лет
            </option>
            <option key={1} value="advanced">
              остальные читатели
            </option>
          </select>
        </nav>
        <Link
          className={`button button__main ${isInteractive === "none" ? "button_idle" : ""}`}
          style={{ pointerEvents: isInteractive }}
          to="countdown"
          onClick={onButtonClicked}>
          Начать
        </Link>
      </div>
    </section>
  );
};
