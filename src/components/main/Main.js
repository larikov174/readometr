import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getInitText } from "../../features/setData/getInitText";
import { storeText } from "../../features/setData/setDataSlice";

export const Main = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const onOptionChanged = (e) => setValue(e.target.value);
  const onButtonClicked = () => dispatch(storeText(getInitText(value)));
  const isInteractive = value === "" ? "none" : "all";

  return (
    <section className={"main"}>
      <div className="main__option">
        <nav className="main__nav">
          <label htmlFor="nameInput" className="main__text main__select_caption">
            Введите имя:
          </label>
          <input type="text" id="nameInput" className="main__input"/>
        </nav>
        <nav className="main__nav">
          <label htmlFor="selectLevel" className="main__text main__select_caption">
            Сложность:
          </label>
          <select className="main__input" id="selectLevel" onChange={onOptionChanged} required>
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
