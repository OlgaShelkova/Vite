import style from "./Button.module.scss";

export default function Button({ text, onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      {text}
    </button>
  );
}
