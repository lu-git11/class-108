import { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import DataContext from '../state/DataContext';

function Navbar(){

    let user = useContext(DataContext).user;
    let cart = useContext(DataContext).cart;

    function getProducts() {
        let total = 0;
        for (let i=0; i<cart.length; i++) {
            total += cart[i].quantity;
        }

        return total;
    }
    
    return(
        <nav>
            <div className="menu">
                <h1>Amazan 2.0</h1>
                <div className="search input-group w-25">
                    <input className="form-control form-control-md" type="text" placeholder='search store'/>
                    <button>search</button>
                </div>
                <Link to="/home">Home</Link>
                <Link to="/catalog">Catalog</Link>
                <Link to="/about">About</Link>
                <Link to="/admin">Admin</Link> 
                <label>Welcome, {user.userName}</label>
                <Link to="/cart"><img className="cart" src="/img/cart-shopping-solid.svg" alt=""/><span className='badge'>{getProducts()}</span> </Link> 
                
            </div>
        </nav>     
    );
}

export default Navbar