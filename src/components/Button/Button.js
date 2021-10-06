import React from "react";
import s from "./Button.module.css";

function Button({ title }) {
  return (
    <button type="submit" className={s.AddBtn}>
      {title}
    </button>
  );
}

export { Button };
