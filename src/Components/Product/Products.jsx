import { ProductData } from "../../data/ProductData";
import ProductCards from "./productCards";

const Products =()=>{

    return (
        <>
        <div className="heading">
            <h1>Smooth Scroll</h1>
            <p>created using lenis librabry</p>
        </div>
        <div className="pCards container">
        {
           // map the objects from ProductData 
           // call the productCards inside the map
           ProductData.map((item )=> <ProductCards key = {item.id} data={item}/>) //store item in a key variable called data  
       }
        </div>
        
        </>
    )
}
export default Products;