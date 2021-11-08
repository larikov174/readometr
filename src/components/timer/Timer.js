import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Timer = () => {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/newPage");
    }, 3000);
  });

  return <div>Prepare to move on next page</div>;
};
