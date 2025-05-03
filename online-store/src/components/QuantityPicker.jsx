import { useContext, useState } from "react";
import"./QuantityPicker.css";
import DataContext from "../state/DataContext";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);//variable, setter(function) = intial state

    let addToCart = useContext(DataContext).addToCart;

    function increase(){
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
    }

    function decrease(){
        let val = quantity - 1;
        if(val >= 0){
        setQuantity(val);
        props.onChange(val);
        }
    }

    function add(){
        
        let prodForCart = {...props.data, quantity};
        console.log("Item added!", prodForCart);
        addToCart(prodForCart);
    }

    return(
        <div className="picker">
            <button className="decrease" disabled={quantity == 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button className='increase' onClick={increase}>+</button>
            <button onClick={add}>Add to Cart</button>
        </div>
        
    )
}

export default QuantityPicker;