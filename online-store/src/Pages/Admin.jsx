import './Admin.css';
import AdminProduct from '../components/AdminProduct';
import AdminDiscount from '../components/AdminDiscount';

function Admin(){
    return (
        <div className='admin'>
            <h3>Store Administration</h3>

            <div className='parent'>
                <AdminProduct />
                <AdminDiscount />
            </div>
        </div>
    )
}

export default Admin;