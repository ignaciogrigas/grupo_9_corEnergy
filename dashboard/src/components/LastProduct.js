import '../css/last_product.css';
import React from 'react';
import { useState, useEffect,useContext } from 'react'
import LastProductContext from '../contexts/LastProductContext';
/*COMPONENTE ROTO!!!!*/
function LastProduct() {
     /*const context =useContext(LastProductContext)
     console.log(context)
    const {getLastProduct,lastProduct} = useContext(LastProductContext);
    useEffect(() => getLastProduct(), []);
    console.log(lastProduct)*/
    let [lastProduct, setLastProduct] = useState({})
    /*const fetchLastProduct = async () =>{
        try{
            const server = await fetch("http://localhost:3001/api/products")
            const data = await server.json()
            const AcquiredProduct = data.products[data.products.length-1]
            const lastProductDetailServer = await fetch(`http://localhost:3001/api/products/detail/${AcquiredProduct.id}`)
            const dataLastProduct = await lastProductDetailServer.json()
            setLastProduct(lastProduct = dataLastProduct)
            return lastProduct
        }catch(err){
            console.log(err);
        }
    }*/
    useEffect( async () =>  {
        try{
            const server = await fetch("http://localhost:3001/api/products")
            const data = await server.json()
            const AcquiredProduct = data.products[data.products.length-1]
            const lastProductDetailServer = await fetch(`http://localhost:3001/api/products/detail/${AcquiredProduct.id}`)
            const dataLastProduct = await lastProductDetailServer.json()
            const objectObject = {}
            const returnedObject = Object.assign(objectObject,dataLastProduct)
            console.log(objectObject)
            setLastProduct(lastProduct=objectObject)
            console.log(lastProduct);
        }catch(err){
            console.log(err);
        }

    }, [])
  return (
    <lastProductProvider>
    <div className="last_product">
        <h2>Last product added</h2>
        {lastProduct===0 && <div>cargando</div>}
        <section>
            <article>
                <figure>
                
                </figure>
            </article>
            <article>
                <ul>
                    <li>
                        <h3>{lastProduct.name}</h3>
                    </li>
                    <li>
                        <h5>lastProduct.category.name</h5> 
                    </li>
                    <li>
                        <p>{lastProduct.description}</p>
                    </li>
                    <li>
                        <p>{lastProduct.code}</p>
                    </li>
                </ul>
                <h5 className="price">$ {lastProduct.price}</h5>
            </article>
        </section>
    </div>
    </lastProductProvider>
  );
}

export default LastProduct;
/*<h5>{lastProduct.category.name}</h5> <img src={`http://localhost:3001${lastProduct.image[0].url}`}/>*/

