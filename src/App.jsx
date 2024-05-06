import style from "./style/App.module.scss";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className={style.container}>
      <div className="App">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
