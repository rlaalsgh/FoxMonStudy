import './HomeScreen.css';
import {Link} from 'react-router-dom';

function Home() {
    return(

        <div className = "test_home">
            <div className = "test_gome_title">FOXMON_STUDY_MEMBERFORM</div>
            <div className = "rester_button">
            <Link to = "/register">
                REGISTER
            </Link>
            </div>
            <div className = "login_button">
            <Link to = "/login">
                LOGIN
            </Link>
            </div>
        </div>
    );
}

export default Home;