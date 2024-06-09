import React from "react";
import style from "./Table.module.scss";
import data from "../../data";
import TableRow from "../TableRow/TableRow";

export default function Table() {
  return (
    <div className={style.table}>
      <table className={style.conteiner}>
        <thead>
          <tr>
            <th>Тема</th>
            <th>Английский</th>
            <th>Транскрипция</th>
            <th>Перевод</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person) => (
            <TableRow key={person.id} {...person} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
