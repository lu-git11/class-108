import './Navbar.css';


function Navbar(){
    
    return(
        <nav>
            <div className="menu">
                <h1>Amazan 2.0</h1>
                <div className="search" class="input-group w-25">
                    <input class="form-control form-control-md" type="text" placeholder='search store'/>
                    <button>search</button>
                </div>
                <a href="">Home</a>
                <a href="">Catalog</a>
                <a href="/About.jsx">About</a>
                <a href="">Admin</a> 
                <img className="cart" src="./public/img/cart-shopping-solid.svg" alt="" />
            </div>
        </nav>     
    );
}

export default Navbar