import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from "react-router-dom"; 
import { useStateValue } from "./StateProvider";
<<<<<<< HEAD
import {auth} from "./firebase";

function Header() {
    const [{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () =>{
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
=======

function Header() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className="header">
            <Link to="/">
                <img className="header_logo" src="https://thumbs.dreamstime.com/b/amazon-155631949.jpg"/>
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
            </Link>
            <div className="header_search">
                <input className="header_searchInput" type="text"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
<<<<<<< HEAD
                <Link to={!user && "/login"}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">
                            Hello Guest
                        </span>
                        <span className="header_optionLineTwo">
                            {user ?'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>
=======
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header_optionLineTwo">
                        Sign In
                    </span>
                </div>
>>>>>>> b435964569b0a8456552fcda9a54e4b85f2078f3
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Returns
                    </span>
                    <span className="header_optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">
                        Your
                    </span>
                    <span className="header_optionLineTwo">
                        Prime
                    </span>
                </div>
                <Link to="/checkout">
                    <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                    </div>
                </Link>
                
            </div>
        </div>
        
    )
}

export default Header
