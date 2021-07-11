import './NavBar.css'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ click }) => {

    // const cart = useSelector(state => state.cart);
    // const { cartItems } = cart;

    // const getCartCount = () => {
    //     return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
    // }

    const onClickLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <Link to="/">
                <div className="navbar_logo">
                    <h2>FoxMon <br/> Education</h2>
                </div>
            </Link>
            {/* links */}
            <ul className="navbar_links">
                {/* {localStorage.getItem("signIn") && (
                <li>
                    <Link to="/cart" className="cart_link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Cart
                            <span className="cartlogo_badge">{cartItems.length}</span>
                        </span>
                    </Link>
                </li>)} */}
                {localStorage.getItem("signIn") && (
                <li>
                    <Link to = "/member" className = "info_link">
                        <i className="fas fa-user"></i>
                        <span>
                            User
                        </span>
                    </Link>
                </li>
                )}
                <li>
                    <Link to="/lecture" className = "lecture_link">
                        <i class="fas fa-shopping-bag"></i>
                        <span>Lecture</span>
                    </Link>
                </li>
                {!localStorage.getItem("login") && (
                <li>
                    <Link to = "/login">Sign In</Link>
                </li>)}
                {!localStorage.getItem("login") && (
                <li>
                    <Link to = "/register">Sign Up</Link>
                </li>)}
                {localStorage.getItem("register") && (
                <li>
                    <button id = "logout" className = "logout_btn" type = "submit" onClick = {onClickLogout}>Logout</button>
                </li>)}
            </ul>
            {/* hamburger menu */}
            <div className="hamburger_menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}

export default Navbar
