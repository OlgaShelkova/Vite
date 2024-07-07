import style from "./Table.scss";
import Table from "./Table";

export default function TableRender() {
  return (
    <div className={style.table - render}>
      <h2 className={style.table - heading}>Таблица слов</h2>
      <Table />
    </div>
  );
}
