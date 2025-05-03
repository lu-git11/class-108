
import './Home.css';
import { Link } from 'react-router-dom';

function Home(){
    return (
        <div className='flex'>
            <img src="/src/assets/react.svg" alt="" />
            <div className='home'> 
                <h1>Welcome Home</h1>
                <h2>We Ship Anywhere!</h2>
                <Link className="link" to="/catalog">Click here to see my catalog!</Link>
            </div>
            <img src="/src/assets/react.svg" alt="" />
        </div>

    );
}

export default Home;