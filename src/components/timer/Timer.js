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
  const playSound = (filename) => {
    const audio = new Audio();
    audio.src = `../../sounds/${filename}.mp3`;
    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("audio played auto");
        })
        .catch((error) => {
          console.log("playback prevented");
        });
    }
  };

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    if (num < 1) {
      playSound("ring");
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
            Таймер&nbsp;00:{num < 10 ? `0${num}` : num}
          </p>
        </div>
        <Link
          className={`button button__navBar ${
            isInteractive === "none" ? "button_idle" : "button_active"
          }`}
          style={{ pointerEvents: isInteractive }}
          to="/results"
        >
          Подсчитать
        </Link>
        <PopupWithNote isOpen={modalVisibleState} isClosed={modalClose} />
      </section>
    </>
  );
};
