import React, { useEffect } from 'react';


import './App.css';

import { useDispatch, useSelector } from 'react-redux';
import Header from "./components/Header/Header";
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed';

import {selectUser,login,logout} from './features/userSlice';

import { auth } from './components/Feed/firebase';
import Widgets from './components/Widgets/Widgets';




function App() {
  
  const user=useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{

      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoUrl,
        })
        );
      } else{
        dispatch(logout());
      }

    });
    
  },[]);
  return (
    
    <div className="app">
      
     {/* Header */}
    <Header/>

      {/* WHOLE BODY */}
      {!user ? 
      <Login/>
       :(
        <div className='app__body'>
        <Sidebar/>
        <Feed/>
        <Widgets/>
        


        </div>

      )}
            
           
           
     
    </div>
  );
}

export default App;