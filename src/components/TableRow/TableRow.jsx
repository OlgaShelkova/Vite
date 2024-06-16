import React, { useState } from "react";
import Button from "../Button/Button";

const TableRow = ({ id, english, transcription, russian }) => {
  // Состояния для управления режимом редактирования
  const [isEditing, setIsEditing] = useState(false);
  // Состояния для хранения отредактированных значений
  const [editedEnglish, setEditedEnglish] = useState(english);
  const [editedTranscription, setEditedTranscription] = useState(transcription);
  const [editedRussian, setEditedRussian] = useState(russian);

  // Обработчик для переключения в режим редактирования
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Обработчик для сохранения изменений
  const handleSave = () => {
    setIsEditing(false);
    // Логика сохранения данных
  };

  // Обработчик для отмены редактирования
  const handleCancel = () => {
    setIsEditing(false);
    // Восстановление исходных значений
    setEditedEnglish(english);
    setEditedTranscription(transcription);
    setEditedRussian(russian);
  };

  // Обработчики изменения значений полей
  const handleEnglishChange = (e) => {
    setEditedEnglish(e.target.value);
  };

  const handleTranscriptionChange = (e) => {
    setEditedTranscription(e.target.value);
  };

  const handleRussianChange = (e) => {
    setEditedRussian(e.target.value);
  };

  return (
    <tr>
      {isEditing ? ( // Если в режиме редактирования
        <>
          <td>
            <input
              type="text"
              value={editedEnglish}
              onChange={handleEnglishChange}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedTranscription}
              onChange={handleTranscriptionChange}
            />
          </td>
          <td>
            <input
              type="text"
              value={editedRussian}
              onChange={handleRussianChange}
            />
          </td>
          <td>
            <Button text="Сохранить" onClick={handleSave} />
            <Button text="Отмена" onClick={handleCancel} />
          </td>
        </>
      ) : (
        // Если не в режиме редактирования
        <>
          <td>{english}</td>
          <td>{transcription}</td>
          <td>{russian}</td>
          <td>
            <Button text="Редактировать" onClick={handleEdit} />
            <Button text="Удалить" />
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
