import {BrowserRouter,Route,Switch} from "react-router-dom"
import { useState, useEffect } from 'react';
import "./css/normalize.css";
import "./css/reset.css";
import './App.css';
import Home from "./components/Home";
import ProductsByCategory from "./components/ProductsByCategory";
import Sales from "./components/Sales";
import Menu from "./components/Menu";
import List from "./components/List"

function App() {
 let [listOfProducts, setListOfProducts] = useState([])
    useEffect( () =>  {
        const fetchListProducts = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const listList=[]
                const list =data.products.map((product,index)=>listList.push({
                key:index,
                id:product.id,
                name:product.name,
                category:product.category.name,
                price:product.price,
                code:product.code
              }))
        
                const totalAmount = setListOfProducts(listList)
                
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchListProducts()
        console.log(listOfProducts)
    }, [])
  return (
    <BrowserRouter>
      <div className="app">
      <Menu/>
      <Switch>
        <Route path="/" exact={true}>
          <Home/>
        </Route>
        <Route path="/list-of-products">
          <List title="List of Products" data={listOfProducts}/>
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
