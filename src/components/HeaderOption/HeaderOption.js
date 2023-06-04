import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function HeaderOption({avatar,Icon,title,onClick}) {
  const user=useSelector(selectUser);
  return (
    <div onClick={onClick} className='headeroption'>
        {Icon &&<Icon className="headeroption__icon"/>}
        {avatar && <Avatar className="headeroption__icon" src={user?.photoUrl} >
          {user?.email[0]}
          </Avatar>}
        <h3 className='headeroption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption

