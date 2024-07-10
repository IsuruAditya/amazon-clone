import React from "react";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBucketIon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt=""
      />

      <div className="header_search">
        <input type="text" className="header_search_input" />
        <SearchIcon className="header_search_icon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_option_line1">Hello Guest</span>
          <span className="header_option_line2">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_option_line1">Returns</span>
          <span className="header_option_line2">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_option_line1">Your</span>
          <span className="header_option_line2">Prime</span>
        </div>
        <div className="header_option_basket">
          <ShoppingBucketIon/>
          <span className="header_option_line2 header_basket_count">0</span>
        </div>
         
      </div>
    </div>
  );
};

export default Header;
