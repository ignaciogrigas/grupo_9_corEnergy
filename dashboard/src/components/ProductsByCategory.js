import React from 'react'
import { CgLoadbar } from 'react-icons/cg'
import { BiRectangle } from 'react-icons/bi'
import { FaTape} from 'react-icons/fa'
import {IoMdFitness} from 'react-icons/io'
import Total from "./Total"
import PieChart from "./PieChart"
import '../css/home.css';

const ProductsByCategory = () => {
    return (
        <div className="home">
        <div className= "totals">
            <Total icon={<IoMdFitness/>} title="Weights" amount="100"/>
            <Total  icon ={<CgLoadbar/>} title="Bars" amount="100"/>
            <Total  icon ={<BiRectangle/>} title="Mats" amount="100"/>
            <Total  icon ={<FaTape/>} title="Elastic Bands" amount="100"/>
        </div>
        <PieChart/>
        </div>
    )
}

export default ProductsByCategory

