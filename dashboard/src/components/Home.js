import '../css/home.css';
import Total from "./Total";
import { GoPackage } from 'react-icons/go'
import { FiUsers } from 'react-icons/fi'
import { MdOutlineCategory,MdCategory } from 'react-icons/md'
import LastProduct from "./LastProduct"

function Home(){
    return(
        <div className="home">
        <div className= "totals">
            <Total icon={<GoPackage/>} title="Products" amount="100"/>
            <Total  icon ={<FiUsers/>} title="Users" amount="100"/>
            <Total  icon ={<MdCategory/>} title="Categories" amount="100"/>
            <Total  icon ={<MdOutlineCategory/>} title="Subcategories" amount="100"/>
        </div>
        <LastProduct image="https://previews.123rf.com/images/wstockstudio/wstockstudio1801/wstockstudio180100245/93817161-fitness-or-bodybuilding-concept-background-product-photograph-of-old-iron-dumbbells-on-grey-conrete-.jpg" name ="name" category ="category" description="allalalalalalalalalalalalalalalaalalalalalalalalalalalalalalalal" code="code" price="123"/>
        </div>
    )
}
export default Home;