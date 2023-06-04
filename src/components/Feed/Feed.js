import React, { useEffect, useState } from 'react'
import "./Feed.css"
import CreateIcon from "@material-ui/icons/Create"
import InputOption from '../HeaderOption/InputOption'
import ImageIcon from "@material-ui/icons/Image"
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EvenNoteIcon from "@material-ui/icons/EventNote"
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay"
import Post from '../Post/Post'
// import { db } from '../../firebase'
import firebase from 'firebase/compat/app';
import {db} from "./firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function Feed() {
    const user=useSelector(selectUser);
    const [input,setInput]=useState('');
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        db.collection("posts").orderBy('timestamp','desc').onSnapshot((snapshot)=>
        setPosts(
            snapshot.docs.map((doc)=>({
                id:doc.id,
                data:doc.data(),
            }))
        ))
    },[]);
    const sendPost=(e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photourl: user.photoUrl || "",
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),

        });
        setInput("");
    };
  return (
    <div className='feed'>
        <div className='feed__inputcontainer'>
            <div className='feed__input'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>

                </form>
            </div>
            <div className='feed__inputoptions'>
                <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9"/>
                <InputOption Icon={SubscriptionsIcon} title='Video' color="#E7A33E"/>
                <InputOption Icon={EvenNoteIcon} title='Event' color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title='Write article' color="#7FC15E"/>
            </div>
        </div>
        {posts.map(({id,data:{name,description,message,photourl}})=>(
            <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photourl={photourl}
            />
        ))}
        {/* <Post name="Benny Tommy" description="This is a test" message="WOW this worked" /> */}

    </div>
  )
}

export default Feed