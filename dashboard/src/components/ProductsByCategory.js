import React from 'react'
import { useState, useEffect } from 'react';
import { CgLoadbar } from 'react-icons/cg'
import { BiRectangle } from 'react-icons/bi'
import { FaTape} from 'react-icons/fa'
import {IoMdFitness} from 'react-icons/io'
import Total from "./Total"
import PieChart from "./PieChart"
import '../css/home.css';
/*COMPONENTE ROTO!!!!*/
const ProductsByCategory = () => {
    let [byCategory, setByCategory] = useState(0)
    useEffect( () =>  {
        const fetchByCategory = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const totalAmount = setByCategory(byCategory = data.countByCategory)
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchByCategory()
    }, [])
    return (
        <div className="home">
        <div className= "totals">
            <Total icon={<IoMdFitness/>} title="Weights" amount="10"/>
            <Total  icon ={<CgLoadbar/>} title="Bars" amount="11"/>
            <Total  icon ={<BiRectangle/>} title="Mats" amount="6"/>
            <Total  icon ={<FaTape/>} title="Elastic Bands" amount="6"/>
        </div>
        <PieChart />
        </div>
    )
}

export default ProductsByCategory
