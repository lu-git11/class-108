import"./Product.css";
import QuantityPicker from "./QuantityPicker";

function Product(props){

    return(
        <div className="product">
            <div className="background">
                <img src={props.item.image}></img>
            </div>
            <h3>{props.item.title}</h3>
            <div className="price">
                <label>Price: ${props.item.price.toFixed(2)}</label>
            </div>
            <div className="quantity">
                <QuantityPicker></QuantityPicker>
            </div>
        </div>
    )
}

export default Product;


