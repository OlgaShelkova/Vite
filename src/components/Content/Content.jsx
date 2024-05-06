import React from "react";
import Table from "../Table/Table";
import "./Content.module.scss";

export default function Content() {
  return (
    <React.Fragment>
      <div>
        <h1>Добро пожаловать!</h1>
        <p>Выучи слова в таблице</p>
      </div>
      <Table />
    </React.Fragment>
  );
}
