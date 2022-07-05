import React from 'react'
import { auth }  from '../../firebase_config'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'



export default function Login() {
  const googleLogin = () =>{
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

  return (
    <>
      <div className='disclaimer'>
      <p > Your email will be visible if you send a message in the chat</p>
      </div>      
      <button onClick={googleLogin}>Login with Google</button>
    </>
  )
}
