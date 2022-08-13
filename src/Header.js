import  ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css'
import { Link } from 'react-router-dom';
import Checkout from './Checkout';



const Header = () => {
  return (
    <div className='header'>
        <Link to ='/' >
        <img className='header__logo'
         src='http://thermosystemea.com/wp-content/uploads/2021/05/THERMOSYSTEMS-FINAL-LOGO-PDF-3.png'/>
     
        </Link>
        
        
        <div className='header__search'>
            <input className='search__Input' type='text'  />
            <SearchIcon  className='header__searchIcon'/>
            {/*logo */}
        </div>
        <div className='header__nav'>
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Guest</span>
                <span className='header__optionLineTwo'>Sign in</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Returns</span>
                <span className='header__optionLineTwo'>& Orders</span>
            </div>
            <div className='header__option'>
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineTwo'>Prime</span>
            </div>
            <Link to='./checkout' >
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header__optionLineTwo header__basketCount' >0</span>
                
            </div>

            </Link>
           
        </div>
    </div>
  )
}

export default Header
