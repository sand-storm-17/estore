//Header // Capital H for a the file name of a component.

import React from 'react';
import './header.css';
// import logo from 'resources/logo.png';
// import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';

function Header() {

    const [{basket}] = useStateValue();
    return (
        <div className="header">
            
            <Link to='/'>
            <img className="header__logo" alt=""
            src="https://knowprepinsite.000webhostapp.com/resources/dyson-logo.png" />
            </Link>

            {/* <div className="header__search">
                <input className="header__searchInput" type="text" />
                
                <SearchIcon className="header__searchIcon" />
            </div>    */}

            <div className="header__nav">
                <Link to='/login'>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest!
                    </span>
                    <span className="header__optionLineTwo">
                        Sign-In
                    </span>
                </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns 
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>
                <div className="header__option">
                <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Offers
                    </span>
                </div>

                <Link to="/ checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                    {/* ? is optional chaining operator in react. */}
                </div>
                </Link>
            </div>

        </div>
    )
}

export default Header
