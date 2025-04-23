import { useState } from "react";
import"./QuantityPicker.css";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);//variable, setter(function) = intial state

    function increase(){
        let val = quantity + 1;
        setQuantity(val);
    }

    function decrease(){
        let val = quantity - 1;
        if(val >= 0){
        setQuantity(val);
        }
    }

    function add(){
        console.log("Item added!");
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