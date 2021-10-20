import {createContext,useState} from 'react'

const LastProductContext = createContext();
const LastProductProvider = ({children}) => {
    const [lastProduct, setLastProduct] = useState(null);

    const getLastProduct = async () => {
        try {
            const server = await fetch("http://localhost:3001/api/products")
            const dataServer = await server.json()
            const AcquiredProduct = dataServer.products[dataServer.products.length-1]
            const lastProductEndpoint = await fetch(`http://localhost:3001/api/products/detail/${AcquiredProduct.id}`)
            const request = await fetch(lastProductEndpoint);
            const dataLastProduct = await request.json();
            setLastProduct(dataLastProduct);
        } catch (error) {
            console.error(error);
        }

    }
    const data = {getLastProduct,lastProduct}
    return <LastProductContext.Provider value={data}>{children}</LastProductContext.Provider>
}
export {LastProductProvider}
export default LastProductContext
