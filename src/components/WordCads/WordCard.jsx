import React, { useState } from "react";
import data from "../../data";
import styles from "./WordCard.css";

const WordCard = () => {
  // Создаем состояние для текущего индекса слова
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false); // Создаем состояние для отображения перевода
  const [buttonVisible, setButtonVisible] = useState(true); // Создаем состояние для видимости кнопок
  const handleNextCard = () => {
    const nextIndex = (currentWordIndex + 1) % data.length; // Вычисляем индекс следующего слова, используем остаток от деления для циклического перехода
    setCurrentWordIndex(nextIndex);
    setShowTranslation(false);
    setButtonVisible(true);
  };
  const handlePrevCard = () => {
    const prevIndex = (currentWordIndex - 1 + data.length) % data.length; // Вычисляем индекс предыдущего слова, используем остаток от деления для циклического перехода
    setCurrentWordIndex(prevIndex);
    setShowTranslation(false);
    setButtonVisible(true);
  };
  const handleClick = () => {
    // Функция handleClick переключает видимость перевода слова и кнопок
    setShowTranslation(!showTranslation);
    setButtonVisible(false);
  };
  const currentWord = data[currentWordIndex];
  // Если массив data пустой, отображается сообщение
  if (data.length === 0) {
    return (
      <p>
        Извините, данные с сервера временно недоступны. <br /> Пожалуйста,
        попробуйте обновить страницу позже <br /> или проверьте подключение к
        интернету.
      </p>
    );
  }
  return (
    <div className={styles.word - card - container}>
      <div className={styles.button - container}>
        <button onClick={handlePrevCard} className={styles.prev - button}>
          Назад
        </button>
      </div>
      <div className="word-card">
        <div key={currentWord.id} className={styles.word - item}>
          <h3>{currentWord.english}</h3>
          <p>{currentWord.transcription}</p>
          {buttonVisible && (
            <button onClick={handleClick}>Показать перевод</button>
          )}
          {showTranslation && <p>{currentWord.russian}</p>}
        </div>
      </div>
      <div className={styles.button - container}>
        <button onClick={handleNextCard} className="next-button">
          Вперед
        </button>
      </div>
    </div>
  );
};
export default WordCard;
