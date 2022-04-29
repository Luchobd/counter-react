import React from "react";
import "../stylesheets/Button.css";

const Button = ({ text, click }) => {
  return (
    <section className="container__button">
      <button className="button__click" onClick={click}>
        {text}
      </button>
    </section>
  );
};

export default Button;
