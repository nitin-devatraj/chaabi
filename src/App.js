import classes from "./App.module.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={classes.container}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
