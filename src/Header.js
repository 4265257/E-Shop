import React from "react"
import "./Header.css"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";



function Header(){
    return(
        <div className="header">
          <Link className="link" to="/" >
<div className='header_logo'>
  <EmojiNatureIcon className="header_logoImage" fontSize="large"/>
<h2>Cozy Crochet Corner</h2>
</div>
          </Link>
<div className='header_search'>
  <input type='text' className="header_searchInput"/>
  <SearchIcon className='header_searchIcon'/>
</div>

<div className='header_nav'>
  <div className='nav_item'>
  <span className='nav_itemLineOne'>Hello guest</span>
<span className='nav_itemLineTwo'>sign in</span>
  </div>
  <div className='nav_item'>
  <span className='nav_itemLineOne'>Your</span>
<span className='nav_itemLineTwo'>shop</span>
  </div>
  <Link className="link" to="/checkout">
  <div className='nav_itemBasket'>
<ShoppingBasketIcon/>
<span className='nav_itemLineTwo nav_basketCount'>0</span>
  </div>
  </Link>

</div>
        </div>
    )
}

export default Header