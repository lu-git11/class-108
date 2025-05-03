import { createContext } from "react";
/* the context is just an interface, should not have implementation*/

let DataContext = createContext({
    cart: [],
    user:{},

    addToCart: () => {},
    removeFromCart: () => {},
    clearCart: () => {},
})

export default DataContext;