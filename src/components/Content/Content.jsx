import React, { useState } from "react";
import Table from "../Table/Table";
import WordCard from "../WordCads/WordCard.jsx";
import "./Content.module.scss";

const Content = () => {
  const minWordId = 1;
  const maxWordId = 23;
  const randomWordId =
    Math.floor(Math.random() * (maxWordId - minWordId + 1)) + minWordId;

  return (
    <>
      <h1>Добро пожаловать!</h1>
      <p>Выучи слова в таблице</p>

      <Table />

      <h1>ИГРА:</h1>
      <p>Познакомьтесь с новым словом:</p>
      <WordCard wordId={randomWordId} />
    </>
  );
};

export default Content;
