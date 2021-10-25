import { useState, useEffect } from 'react';
import '../css/home.css';
import Total from "./Total";
import { GoPackage } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineCategory,MdCategory } from 'react-icons/md'
import LastProduct from "./LastProduct"

function Home(){
    let [totalProducts, setTotalProducts] = useState(0)
    useEffect( () =>  {
        const fetchTotalProducts = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const totalAmount = setTotalProducts(totalProducts = data.count)
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchTotalProducts()
    }, [])
    let [totalUsers, setTotalUsers] = useState(0)
    useEffect( () =>  {
        const fetchTotalUsers = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/users")
                const data = await server.json()
                const totalAmount = setTotalUsers(totalUsers = data.count)
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchTotalUsers()
    }, [])
    /*let [lastProduct, setLastProduct] = useState(0)
    useEffect( () =>  {
        const fetchLastProduct = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const AcquiredProduct = data.products[data.products.length-1]
                const lastProductDetailServer = await fetch(`http://localhost:3001/api/products/detail/${AcquiredProduct.id}`)
                const dataLastProduct = await lastProductDetailServer.json()
                const infoLastProduct = setLastProduct(lastProduct = dataLastProduct)
                console.log(lastProduct);
                return infoLastProduct
            }catch(err){
                console.log(err);
            }
        }
        fetchLastProduct()
    }, [])*/
    /* let [listOfProducts, setListOfProducts] = useState([])
    useEffect( () =>  {
        const fetchListProducts = async () =>{
            try{
                const server = await fetch("http://localhost:3001/api/products")
                const data = await server.json()
                const totalAmount = setListOfProducts(data.products.map((product,index)=>listOfProducts.push({
                  key:index,
                  id:product.id,
                  name:product.name,
                  category:product.category.name,
                  price:product.price,
                  code:product.code
                })))
                console.log(listOfProducts);
                return totalAmount
            }catch(err){
                console.log(err);
            }
        }
        fetchListProducts()
    }, [])*/
    return(
        <div className="home">
        <div className= "totals">
            <Total icon={<GoPackage/>} title="Products" amount="34"/>
            <Total  icon ={<FiUsers/>} title="Users" amount={totalUsers}/>
            <Total  icon ={<MdCategory/>} title="Categories" amount="4"/>
            <Total  icon ={<MdOutlineCategory/>} title="Subcategories" amount="11"/>
        </div>
        <LastProduct/>
        </div>
    )
}
export default Home;
/*<LastProduct/>
<LastProduct image={lastProduct.image[0].url} code={lastProduct.code} price={lastProduct.price} description={lastProduct.description} category={lastProduct.category.name} name={lastProduct.name}/>*/