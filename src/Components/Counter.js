import React from "react";
import "../stylesheets/Counter.css";

const Counter = ({ numberView }) => {
  return (
    <section className="container__counter">
      <p className="counter__number">{numberView}</p>
    </section>
  );
};

export default Counter;
