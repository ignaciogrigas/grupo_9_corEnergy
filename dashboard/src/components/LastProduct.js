import '../css/last_product.css';
import React from 'react';
import { useState, useEffect,useContext } from 'react'
import LastProductContext from '../contexts/LastProductContext';

function LastProduct() {
    const {getLastProduct,lastProduct} = useContext(LastProductContext);
    useEffect(() => getLastProduct(), []);
  return (
    <lastProductProvider>
    <div className="last_product">
        <h2>Last product added</h2>
        <section>
            <article>
                <figure>
                <img/>
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
                        <p>lastProduct.description</p>
                    </li>
                    <li>
                        <p>lastProduct.code</p>
                    </li>
                </ul>
                <h5 className="price">$ lastProduct.price</h5>
            </article>
        </section>
    </div>
    </lastProductProvider>
  );
}

export default LastProduct;
/*<h5>{lastProduct.category.name}</h5>*/

