import React, { useState } from "react";
import Table from "../Table/Table";
import WordCard from "../WordCads/WordCard.jsx";
import data from "../../data";
import "./Content.scss";

const Content = ({ initialIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);
  const word = data[currentIndex] || data[0];

  return (
    <>
      <h1>Добро пожаловать!</h1>
      <p>Выучи слова в таблице</p>

      <Table />

      <h1>ИГРА:</h1>
      <p>Познакомьтесь с новым словом:</p>
      <WordCard word={word} />
    </>
  );
};

export default Content;
