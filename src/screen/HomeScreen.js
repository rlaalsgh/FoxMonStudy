import './HomeScreen.css';
import {Link} from 'react-router-dom';

function Home() {
    return(

        <div className = "test_home">
            <div className = "test_home_title">FOXMON_STUDY_CART
            </div>
            <div className = "cart_button">
            <Link to = "/cart">
                CART
            </Link>
            </div>
            <div className = "product_button">
            <Link to = "/premier">
                PRODUCT
            </Link>
            </div>
        </div>
    );
}

export default Home;