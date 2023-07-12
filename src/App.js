import classes from "./App.module.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";

function App() {
  return (
    <div className={classes.container}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
