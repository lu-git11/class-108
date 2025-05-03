import "./Cart.css";
import DataContext from "../state/DataContext";
import { useContext, useState } from "react";

function Cart() {

    let cart = useContext(DataContext).cart;
    let clearCart = useContext(DataContext).clearCart;
    let removeFromCart = useContext(DataContext).removeFromCart;

    function totalProducts(){
        let total = 0;
        for (let i=0; i<cart.length; i++) {
            total += cart[i].quantity;
        }
        return total;
    }

    function Total(){
        let total = 0;
        for (let i=0; i<cart.length; i++) {
            total += (cart[i].quantity * cart[i].price);
        }

        return total.toFixed(2);
    }

    function remove() {
        removeFromCart();
    }

    function clear() {
        clearCart();
    }



    
    return (
        <div className="cart">
            <h1>Here are your items. </h1>
            <h3>You have {totalProducts()} items in your cart.</h3>
            <div className="cartCont">
                <div className="cartList">
                    {cart.map( prod => 
                    <div className="prod-cart">
                        <img src={prod.image}></img>
                        <h4>{prod.title}</h4>
                        <label>Price: ${prod.price}</label>
                        <label>Quantity: {prod.quantity}</label>
                        <label>Total: ${(prod.price * prod.quantity).toFixed(2)}</label>
                        <button onClick={remove} className='removeBtn'>remove</button>
                    </div>
                    )}
                </div>
                <div className="sidemenu">
                    <p>Total:</p>
                    <p>${Total()}</p>

                    {cart.length > 0 ? 
                    <button onClick={clear} >empty</button> 
                    : <p>Go add product</p>
                    }

                </div>
            </div>
        </div>
    )
}

export default Cart;