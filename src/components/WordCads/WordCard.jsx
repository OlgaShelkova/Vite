import React, { useState } from "react";
import data from "../../data";
import "./WordCard.css";

const WordCard = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleClick = () => {
    setShowTranslation(!showTranslation);
    setButtonVisible(false);
  };

  const currentWord = data[currentWordIndex];

  return (
    <div className="word-card-container">
      <div className="word-card">
        <div key={currentWord.id} className="word-item">
          <h3>{currentWord.english}</h3>
          <p>{currentWord.transcription}</p>
          {buttonVisible && (
            <button onClick={handleClick}>Показать перевод</button>
          )}
          {showTranslation && <p>{currentWord.russian}</p>}
        </div>
      </div>
    </div>
  );
};

export default WordCard;
