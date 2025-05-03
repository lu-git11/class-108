import { useState } from 'react';
import './AdminDiscount.css';
import { Link } from 'react-router-dom';

function AdminDiscount(){
    let [allCoupon, setAllCoupon] = useState([]);
    let [coupon, setCoupon] = useState({
        code:'',
        discount:''
    });

    function handleInput(e){
        let text = e.target.value;
        let name = e.target.name;


        let copy = {...coupon};
        if (name == 'code') {    
            copy.code = text;
        }
        else if (name == 'discount'){
            copy.discount = text;   
        }
        setCoupon(copy);
    }

    function save(){
        console.log(coupon);
        let copy = [...allCoupon];
        copy.push(coupon);
        setAllCoupon(copy);
    }

    return (
        <div className='adm-discount'>
            <h3>discounts</h3>
            <div className='mb-3'>
                <label className='form-label'>code</label>
                <input className="form-control" type="text" onChange={handleInput} name='code' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>discount</label>
                <input className='form-control' type="number" inputMode='deciaml' min={0} step={.01} onBlur={handleInput} name='discount' />
            </div>
            <div>
                <button onClick={save}>save</button>
            </div>

            <ul>
                {allCoupon.map( cp => <li key={cp.code}>{cp.code} {cp.discount}</li>)}
            </ul>
        </div>
    );
}

export default AdminDiscount;