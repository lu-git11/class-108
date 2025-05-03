import { useState } from 'react';
import './AdminProduct.css';

function AdminProduct(){
    let [allProduct, setAllProduct] = useState([]);
    let [product, setProduct] = useState({
        title:'',
        price: 0,
        image:'',
        category:''
    });

    function handleInput(e){
        let text = e.target.value;
        let name = e.target.name;

        let copy = {...product};
        if (name == 'title'){
            copy.title = text;
        }
        else if (name == 'price'){
            copy.price = parseFloat(text);
        }
        else if (name == 'image'){
            copy.image = text;
        }
        else if (name == 'category'){
            copy.category = text;
        }
        setProduct(copy);
    }

    function save(){
        console.log(product);
        let copy = [...allProduct];
        copy.push(product);
        setAllProduct(copy);
    }

    return(
        <div className='adm-product'>
            <h3>products</h3>
            <div className='mb-3'>
                <label className='form-label'>name</label>
                <input className="form-control" type="text" onBlur={handleInput} name='title' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>price</label>
                <input className='form-control' type='number' onBlur={handleInput} name='price'/>
            </div>
            <div className='mb-3'>
                <label className='form-label'>image</label>
                <input className='form-control' type="text" onBlur={handleInput} name='image' />
            </div>
            <div className='mb-3'>
                <label className='form-label'>category</label>
                <select className='form-select' name="category" id="" onBlur={handleInput}>
                    <option placeholder='category' selected disabled>select category</option>
                    <option>food</option>
                    <option>animal</option>
                    <option>hat</option>
                </select>
            </div>
            <div>
                <button onClick={save}>save</button>
            </div>

            <ul>
                {allProduct.map( pr => <li key={pr.title}>
                    <img src={pr.image} alt='' /> {pr.title}  ${pr.price}  {pr.category}</li> )}
            </ul>
        </div>
    )
}

export default AdminProduct;
