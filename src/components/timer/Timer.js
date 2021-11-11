import React, { useState, useRef, useEffect } from "react";
import { PopupWithNote } from "../popupWithNote/PopupWithNote";
import { useNavigate, Link } from "react-router-dom";

export const Timer = () => {
  let navigate = useNavigate();
  const [num, setNum] = useState(59);
  const [modalVisibleState, setModalVisibleState] = useState(false);
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
      setModalVisibleState(true);
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [num, navigate]);

  return (
    <>
      <section className={"timer"}>
        <div className="timer__area">
          <p className="timer__block">таймер&nbsp;00:{num < 10 ? `0${num}` : num}</p>
          <Link className={"button button__navBar"} to="/">
            Назад
          </Link>
        </div>
      </section>
      <PopupWithNote isOpen={modalVisibleState} isClosed={modalClose} />
    </>
  );
};
