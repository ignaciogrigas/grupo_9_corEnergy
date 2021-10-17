import {BrowserRouter,Route,Switch} from "react-router-dom"
import "./css/normalize.css";
import "./css/reset.css";
import './App.css';
import Home from "./components/Home";
import List from "./components/List";
import ProductsByCategory from "./components/ProductsByCategory";
import Sales from "./components/Sales";
import Menu from "./components/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Menu/>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/list-of-products">
          <List title="List Of Products" data={[
          {
            name:"hola",
            code:"12345",
            category:"holi",
            price:"12"
          },
          {
            name:"hola",
            code:"12345",
            category:"holi",
            price:"12"
          },
          {
            name:"hola",
            code:"12345",
            category:"holi",
            price:"12"
          },
          {
            name:"hola",
            code:"12345",
            category:"holi",
            price:"12"
          }
        ]}/>
        </Route>
        <Route path="/products-by-category">
          <ProductsByCategory/>
        </Route>
        <Route path="/sales">
          <Sales/>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
