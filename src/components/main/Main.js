import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getInitText } from "../../features/setData/getInitText";
import { saveText, saveUser } from "../../features/setData/dataSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const [optionValue, setOptionValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const onOptionChanged = (e) => setOptionValue(e.target.value);
  const onInputChanged = (e) => setInputValue(e.target.value);
  const onButtonClicked = () => {
    dispatch(saveText(getInitText(optionValue)));
    dispatch(saveUser(inputValue));
  };
  const isInteractive =
    optionValue === "" || inputValue === "" ? "none" : "all";

  return (
    <section className={"main"}>
      <div className="main__option">
        <nav className="main__nav">
          <label
            htmlFor="nameInput"
            className="main__text"
          >
            Введите имя:
          </label>
          <input
            type="text"
            id="nameInput"
            className="main__input"
            onChange={onInputChanged}
          />
        </nav>
        <nav className="main__nav">
          <label
            htmlFor="selectLevel"
            className="main__text"
          >
            Сложность:
          </label>
          <select
            className="main__input"
            id="selectLevel"
            onChange={onOptionChanged}
          >
            <option value=""></option>
            <option key={0} value="beginner">
              дети 7-13 лет
            </option>
            <option key={1} value="advanced">
              остальные читатели
            </option>
          </select>
        </nav>
        <Link
          className={`button button__main ${
            isInteractive === "none" ? "button_idle" : ""
          }`}
          style={{ pointerEvents: isInteractive }}
          to="countdown"
          onClick={onButtonClicked}
        >
          Начать
        </Link>
      </div>
    </section>
  );
};
