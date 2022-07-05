import React, {useState, useEffect} from 'react';
import { db, auth } from '../../firebase_config';
import { collection, limit, orderBy, query } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';
import "./chat.css"


export default function Chat() {
  const messagesRef = collection(db,"messages")
  const q = query(messagesRef,orderBy("createdAt"),limit(25))

  const [snapshot, loading, error] = useCollection(q)
  
  //   orderBy("createdAt"),
  // limit(3));

  return (
    <>
      <p>{error && <strong>Error: {JSON.stringify(error)}</strong>}</p>
      <p>{loading && <span>Collection: Loading...</span>}</p>
      <div className='chat-wrapper'>
        {snapshot && (
          <div className='chat-content'>
            {snapshot.docs.map((doc) => (
              <div key={doc.id} className="msg">
                <img src={doc.data().photoUrl} className="msg-pp"/>
                <div className='msg-right'>
                  <div className='msg-author'>
                    {doc.data().userDisplayName && doc.data().userDisplayName} | 
                    ({doc.data().userEmail})
                    <span className='date'> - {doc.data().createdAt.toDate().toLocaleString()} </span>
                    </div>
                  <div className="msg-text">{doc.data().msg}</div>
                </div>
              </div >
            ))}
          </div>
        )}
      </div>
    </>
  )
}
