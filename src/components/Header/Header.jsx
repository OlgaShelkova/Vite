import logoImg from "../../assets/img/logo.jpg";
import style from "./Header.module.scss";

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.row}>
          <div className={style.logo}>
            <img className={style.logoImg} src={logoImg} alt="Logo" />
            <span> ШАГ ЗА ШАГОМ К СВОБОДНОМУ ОБЩЕНИЮ на английском!</span>
          </div>
          <nav className={style.nav}>
            <ul>
              <li>
                <a href="#!">Главная</a>
              </li>
              <li>
                <a href="#!">Игра</a>
              </li>
              <li>
                <a href="#!" className="header__nav-btn">
                  Регистрация
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
