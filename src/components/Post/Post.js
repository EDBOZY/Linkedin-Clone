import React from 'react'
import "./Post.css"
import { Avatar } from '@material-ui/core'
import InputOption from '../HeaderOption/InputOption'
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
// import { useSelector } from 'react-redux'
// import { selectUser } from '../../features/userSlice'

function Post({name,description,message,photourl}) {
    // const user=useSelector(selectUser);
  return (
    <div className='post'>
        <div className='post_header'>
            <Avatar src={photourl}>{name[0]}</Avatar>
            <div className='post_info'>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className='post_body'>
            <p>{message}</p>
        </div>
        <div className='post_buttons'>
            <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlined} title="Comment" color="gray"/>
            <InputOption Icon={ShareOutlined} title="Share" color="gray"/>
            <InputOption Icon={SendOutlined} title="Send" color="gray"/>

        </div>
    </div>
  )
}

export default Post 