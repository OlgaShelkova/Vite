import React, { useState } from "react";
import data from "../../data";
import PropTypes from "prop-types";
import "./WordCard.css";

const WordCard = () => {
  //Создаем состояние для текущего индекса слова.//
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showTranslation, setShowTranslation] = useState(false); //Создаем состояние для отображения перевода.//
  const [buttonVisible, setButtonVisible] = useState(true); //Создаем состояние для видимости кнопок.//

  const handleNextCard = () => {
    const nextIndex = currentWordIndex + 1; //// Вычисляем индекс следующего слова//
    if (nextIndex < data.length) {
      //Проверяем, чтобы следующий индекс был в пределах массива данных//
      //Если следующий индекс в пределах, обновляем индекс, скрываем перевод и показываем кнопки//
      setCurrentWordIndex(nextIndex);
      setShowTranslation(false);
      setButtonVisible(true);
    } else {
      // Если следующего слова нет, возвращаемся к началу массива
      setCurrentWordIndex(0); // В начало карточек
    }
  };

  const handlePrevCard = () => {
    const prevIndex = currentWordIndex - 1; // Вычисляем индекс предыдущего слова//
    // Проверяем, чтобы предыдущий индекс был больше или равен 0//
    if (prevIndex >= 0) {
      // Если предыдущий индекс в пределах, обновляем индекс, скрываем перевод и показываем кнопки//
      setCurrentWordIndex(prevIndex);
      setShowTranslation(false);
      setButtonVisible(true);
    }
  };

  const handleClick = () => {
    // Функция handleClick переключает видимость перевода слова и кнопок//
    setShowTranslation(!showTranslation);
    setButtonVisible(false);
  };

  const currentWord = data[currentWordIndex];
  // Если массив data пустой, отображается сообщение//
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
    <div className="word-card-container">
      <div className="button-container">
        <button onClick={handlePrevCard} className="prev-button">
          Назад
        </button>
      </div>

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

      <div className="button-container">
        <button onClick={handleNextCard} className="next-button">
          Вперед
        </button>
      </div>
    </div>
  );
};

WordCard.propTypes = {
  initialData: PropTypes.array, // Принимаем массив слов
};

WordCard.defaultProps = {
  initialData: [], // Устанавливаем пустой массив слов по умолчанию
};
export default WordCard;
