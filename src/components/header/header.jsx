import React from 'react'
import './header.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth} from '../firebase/utils'
const Header = ({currentUser}) => {
   return (<div className='header'>
      <Link className='logo-container' to='/'>
         <Logo className='logo' />
      </Link>
      <div className='options'>
         <Link className='option' to='/shop'>
            Shop
         </Link>
         <Link className='option' to='/contact' >
            Contact
      </Link>
         {currentUser ? <div onClick={()=>auth.signOut()} className='option'>
            Sign Out
         </div>
            :
            <Link className='option' to='/signin' >
            Sign In
      </Link>}
      
      </div>
   </div>)
}

export default Header;