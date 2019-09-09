import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import Rglp from "./pages/ReactGridLayoutPage";
import Rglp from "./pages/ReactRndPage";

class App extends React.Component {
  changeDiv = () => {
    alert(3);
  };
  render() {
    return <Rglp />;
  }
}

export default App;
