import { addDoc, collection, Timestamp } from 'firebase/firestore';
import React,{useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { db,auth } from '../../firebase_config';

import "./sendmsg.css"
export default function SendMsg() {
  const [text, setText] = useState("")
  const [disabled, setDisabled] = useState(false)

  const [user, loading, error] = useAuthState(auth);

  const handleSend = async (e,text) => {
    e.preventDefault();  
    setDisabled(true);
    if (!text){
      setDisabled(false)
      return
    }
    await addDoc(collection(db,"messages"),{
      msg:text,
      createdAt: Timestamp.fromDate(new Date()),
      uid:user.uid,
      userDisplayName:user.displayName,
      userEmail:user.email,
      photoUrl:user.photoURL,
    });
    setDisabled(false);
    setText("");
  }

  return (
    <form className='send-form'>
      <input type="text" disabled={!user} onChange={e=>setText(e.target.value)} value={text}/>
      <button className="send-btn"disabled={disabled} onClick={e=>handleSend(e,text)}>Send</button>
    </form>
  )
}
