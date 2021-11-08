import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Countdown = () => {
  let navigate = useNavigate();
  const [num, setNum] = useState(3);
  const intervalRef = useRef();
  const decreaseNum = () => setNum((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 1000);

    if (num < 1) {
      navigate("/book");
      clearInterval(intervalRef.current);
      setNum(3);
    }

    return () => clearInterval(intervalRef.current);
  }, [num, navigate]);

  return (
    <section className={"main"}>
      <h2 className="main__count">{num}</h2>
    </section>
  );
};
