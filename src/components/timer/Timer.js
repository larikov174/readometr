import React, { useState, useRef, useEffect } from "react";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";
import { Link } from "react-router-dom";

export const Timer = () => {
  const [num, setNum] = useState(59);
  const [modalVisibleState, setModalVisibleState] = useState(false);
  const [isActive, setIsActive] = useState("");
  const isInteractive = isActive === "" ? "none" : "all";
  const modalClose = () => setModalVisibleState(false);
  const intervalRef = useRef();
  const decreaseNum = () => setNum((prev) => prev - 1);
  const playSound = (fileName) => {
    const audio = new Audio();
    audio.src = `https://code.s3.yandex.net/web-code/react/${fileName}`;
    audio.play();
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    if (num < 1) {
      playSound("gong.mp3");
      setIsActive(true);
      setModalVisibleState(true);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [num]);

  return (
    <>
      <section className={"timer"}>
        <div className="timer__area">
          <p className="timer__block">
            таймер&nbsp;00:{num < 10 ? `0${num}` : num}
          </p>
          <Link className={"button button__navBar"} to="/">
            Назад
          </Link>
          <Link
            className={`button button__navBar ${
              isInteractive === "none" ? "button__navBar_idle" : ""
            }`}
            style={{ pointerEvents: isInteractive }}
            to="/results"
          >
            Подсчитать
          </Link>
        </div>
      </section>
      <PopupWithNote isOpen={modalVisibleState} isClosed={modalClose} />
    </>
  );
};
