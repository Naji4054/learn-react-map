import { ProductData } from "../../data/ProductData";
import ProductCards from "./productCards";

const Products =()=>{

    return (
        <>
        <div className="pCards container">
        {
           
           ProductData.map((item )=> <ProductCards key = {item.id} data={item}/>)
       }
        </div>
        
        </>
    )
}
export default Products;