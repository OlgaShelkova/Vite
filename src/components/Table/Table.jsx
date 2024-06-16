import React from "react";
import "./Table.scss";
import data from "../../data";
import TableRow from "../TableRow/TableRow";

export default function Table() {
  return (
    <div className="table">
      <table className="container">
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
