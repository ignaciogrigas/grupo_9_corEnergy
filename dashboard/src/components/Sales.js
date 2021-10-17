import React from 'react'
import Total from "./Total";
import '../css/home.css';
import {HiCurrencyDollar} from 'react-icons/hi'
import {MdOutlineSell} from 'react-icons/md'
import List from "./List"

const Sales = () => {
    return (
      <div className="home">
        <div className="totals_sales">
          <Total icon={<HiCurrencyDollar/>} title="Total sales" amount="100" className=".total_sales"/>
          <Total  icon ={<MdOutlineSell/>} title="Total products sold" amount="100"/>
        </div>
          <List title="Best Seller" data={[
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
      </div>
    )
}

export default Sales
