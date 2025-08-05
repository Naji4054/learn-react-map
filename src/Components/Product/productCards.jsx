import "./Product.css";
const ProductCards = (props) => {
    const data =props.data
    console.log(props)
    return (
        <>
       
       <div className="card">
            <p className="title">{data.title}</p>
            <p className="price">{data.price}</p>
            <div className="image">
                <img src={data.image} alt="productImage" />
            </div>
            
        </div>
       
        </>
    )
}
export default ProductCards;