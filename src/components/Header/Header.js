import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search"
import logo from "../../assets/linkedin.png"
import HeaderOption from '../HeaderOption/HeaderOption'
import HomeIcon from "@material-ui/icons/Home"
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount"
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter"
import ChatIcon from "@material-ui/icons/Chat"
import NotificationsIcon from "@material-ui/icons/Notifications"
import { useDispatch } from 'react-redux'
import { auth } from '../Feed/firebase';
import { logout } from '../../features/userSlice';
import { Avatar } from '@material-ui/core'

function Header() {
  
  const dispatch=useDispatch();
  const logoutofApp=()=>{
    dispatch(logout())
    auth.signOut();
  };
  
  return (
    <div className='header'>
        <div className='header__left'>
            <img src={logo} alt=""/>
            <div className='header__search'>
                <SearchIcon/>
                <input type='text'/>
            </div>
        </div>
        <div className='header__right'>
            <HeaderOption  Icon={HomeIcon} title={'Home'}/>
            <HeaderOption Icon={SupervisorAccountIcon} title={'My Network'}/>
            <HeaderOption Icon={BusinessCenterIcon} title={'Jobs'}/>
            <HeaderOption Icon={ChatIcon} title={'Messaging'}/>
            <HeaderOption Icon={NotificationsIcon} title={'Notifications'}/>
            <HeaderOption avatar={Avatar} title={'me'}
            onClick={logoutofApp}/>
        </div>
    </div>
  )
}

export default Header 