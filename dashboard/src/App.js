import { Fragment } from "react";
/*import {BrowserRouter,Link,Route,Switch} from "react-router-dom"
import Menu from "./components/Menu"*/
import "./css/normalize.css";
import "./css/reset.css";
import './App.css';
import PieChart from "./components/PieChart";

function App() {
  return (
    <Fragment>
      <PieChart weightAmount="30" barsAmount="30" matsAmount="30" elasticBandsAmount="30"  />
    </Fragment>
  );
}

export default App;
