import * as React from "react";
import * as ReactDOM from "react-dom";
import { useState, useEffect } from 'react';
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '../css/list.css';


let [listOfProducts, setListOfProducts] = useState([])
    useEffect( () =>  {
        const fetchListProducts = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const totalAmount = setListOfProducts(data.products.map((product,index)=>listOfProducts.push({
                  key:index,
                  id:product.id,
                  ProductName:product.name,
                  Category:product.category.name,
                  UnitPrice:product.price,
                  code:product.code
                })))
                console.log(listOfProducts);
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchListProducts()
    }, [])

const List2 = () => {
  return (
    <div className="list">
    <h2>List of Products</h2>
    <Grid
      data={listOfProducts}
    >
      <Column field="id" title="Id" width="40px" />
      <Column field="ProductName" title="Name" width="250px" />
      <Column field="Category" title="Category" />
      <Column field="UnitPrice" title="Price" />
      <Column field="code" title="Code" />
    </Grid>
    </div>
  );
};
export default List2
ReactDOM.render(<List2 />, document.querySelector("list2"));