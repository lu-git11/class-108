
import Product from "../components/Product";
import"./Catalog.css";
import { mockCatalog, mockCategory } from '../services/DataService';
import { useState } from "react";



function Catalog(){

    let [filter, setFilter] = useState('');
    return(
        <div className="catalog">
            <h1>Catalog</h1> 
            <div className="filter">
                <button className="all" onClick={() => setFilter('')}>All</button>
                {mockCategory.map(cat => <button key={cat} onClick={() => setFilter(cat)} className="catBtn">{cat}</button>)}
            </div>
            <div className="list">                   
                {mockCatalog.filter(prod => prod.category == filter || !filter).map(prod => <Product item={prod} key={prod._id} />)}
            </div>  
        </div>
    )
}

export default Catalog;