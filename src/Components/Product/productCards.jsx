import "./Product.css";
const ProductCards = (props) => {
    const data =props.data  // call the  key data from the product.jsx with the props  and store it in a variable called data.
    console.log(props)
    return (
        <>
       <div className="card">
            <p className="title">{data.title}</p>
            <p className="price">{data.price}</p> 
            <div className="image-wrap">
                <img className="image" src={data.image} alt="productImage" />
            </div>
            
        </div>
       
        </>
    )
}
export default ProductCards;

// Call title , price ... dynamically 