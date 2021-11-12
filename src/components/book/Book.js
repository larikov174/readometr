import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveIndex } from "../../features/setData/dataSlice";
import { Timer } from "../timer/Timer";

export const Book = () => {
  const { text } = useSelector((state) => state.setData);
  const dispatch = useDispatch();
  const onSelect = (e) => {
    dispatch(saveIndex(e.target.selectionStart));
  };

  return (
    <section className={"main"}>
      <Timer />
      <textarea
        className="book__textArea"
        value={text}
        maxLength={450}
        onSelect={onSelect}
        readOnly
      />
    </section>
  );
};
