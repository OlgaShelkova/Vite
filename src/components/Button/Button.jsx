import "./Button.scss";

export default function Button({ text, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {" "}
      {/* Используем класс из SCSS файла */}
      {text}
    </button>
  );
}
