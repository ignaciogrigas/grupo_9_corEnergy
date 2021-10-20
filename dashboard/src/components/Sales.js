import { useState, useEffect } from 'react';
import React from 'react'
import Total from "./Total";
import '../css/home.css';
import {HiCurrencyDollar} from 'react-icons/hi'
import {MdOutlineSell} from 'react-icons/md'
import List from "./List"

const Sales = () => {
  let [sales, setSales] = useState(0)
  useEffect( () =>  {
      const fetchSales = async () =>{
          try{
              const server = await fetch("http://localhost:3001/api/sales/total-revenue")
              const data = await server.json()
              const totalAmount = setSales(sales = data)
              return totalAmount
          }catch(err){
              console.log(err);
          }
      }
      fetchSales()
  }, [])
  let [productsBought, setProductsBought] = useState(0)
  useEffect( () =>  {
      const fetchProductsBought = async () =>{
          try{
              const server = await fetch("http://localhost:3001/api/sales/total-products-sold")
              const data = await server.json()
              const totalAmount = setProductsBought(productsBought = data.count)
              return totalAmount
          }catch(err){
              console.log(err);
          }
      }
      fetchProductsBought()
  }, [])
  let [bestSellers, setBestSellers] = useState([])
  const fetchLBestSellers = async () =>{
    try{
        const server = await fetch("http://localhost:3001/api/sales/best-sellers")
        const data = await server.json()
        const totalAmount = setBestSellers(data.map((product,index)=>bestSellers.push({
          key:index,
          id:product.product.id,
          name:product.product.name,
          category:product.product.category.name,
          price:product.product.price,
          code:product.product.code
        })))
        console.log(bestSellers);
        return totalAmount
    }catch(err){
        console.log(err);
    }
}
    useEffect( () =>  {
        fetchLBestSellers()
    }, [])
    return (
      <div className="home">
        <div className="totals_sales">
          <Total icon={<HiCurrencyDollar/>} title="Total sales" amount={sales} className=".total_sales"/>
          <Total  icon ={<MdOutlineSell/>} title="Total products sold" amount={productsBought}/>
        </div>
          <List title="Best Seller" data={bestSellers}/>
      </div>
    )
}

export default Sales
