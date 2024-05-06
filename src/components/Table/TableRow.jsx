import React, { useState } from "react";
import Button from "../Button/Button";

const TableRow = ({ id, english, transcription, russian }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Логика сохранения данных
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Логика отмены редактирования
  };

  return (
    <tr>
      <td>{id}</td>
      {isEditing ? (
        <>
          <td>
            <input type="text" defaultValue={english} />
          </td>
          <td>
            <input type="text" defaultValue={transcription} />
          </td>
          <td>
            <input type="text" defaultValue={russian} />
          </td>
          <td>
            <Button text="Сохранить" onClick={handleSave} />
            <Button text="Отмена" onClick={handleCancel} />
          </td>
        </>
      ) : (
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
