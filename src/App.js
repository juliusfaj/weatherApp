import React from "react";
import { useState, useEffect } from "react";
import ImageOne from "./images/image_one.jpg";
import ImageTwo from "./images/image_two.jpg";
import ImageThree from "./images/image_three.jpg";
import Weather from "./weather";

function App() {
  const data = [ImageOne, ImageTwo, ImageThree];

  const randNum = () => {
    return Math.floor(Math.random() * data.length);
  };

  const [number, setNumber] = useState(randNum());
  const [background, setBackground] = useState(data[number]);

  return (
    <section
      className="section-center"
      style={{
        background: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Weather />
    </section>
  );
}

export default App;
