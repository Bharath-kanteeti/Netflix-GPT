import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/fireBase'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errMessage, setErrMessage] = useState(null)
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }
  const handleButtonClick = () => {
    // Validation of form data
    const message = checkValidData(email.current.value, password.current.value)
    setErrMessage(message)

    if(message) return;

    // if no error then proceed with signup or signin of the usser

    if(isSignInForm) {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          navigate('/browse')
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorMessage == 'Firebase: Error (auth/invalid-credential).'){
            setErrMessage('User Not found or Invalid Credentials');
          }
        });
    } else {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({
              uid: uid, 
              email: email, 
              displayName: displayName
            }))
            navigate('/browse')
            console.log(auth)
          }).catch((error) => {
            setErrMessage('Error in updating profile');
          });
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage == 'Firebase: Error (auth/email-already-in-use).'){
            setErrMessage('Email already in use');
          }
        });
    }
    

  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg' alt='logo' />
        </div>
        <form 
          onSubmit={(e) => e.preventDefault()}
          className='bg-black rounded-md absolute m-48 mx-auto right-0 left-0 p-12 w-1/4 text-white bg-opacity-85'>
          <h1 className=' font-bold p-2 text-2xl'> 
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {
            !isSignInForm && <input 
            ref={name}
            type = 'text' 
            placeholder = 'User name' 
            className='text-white w-full p-2 m-2 bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          }
          <input
            ref={email}
            type = 'text' 
            placeholder = 'Email or Phone number' 
            className='text-white w-full p-2 m-2 bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          <input
            ref={password}
            type = 'password' 
            placeholder = 'Password' 
            className='text-white p-2 m-2 w-full bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          <p className='px-2 text-red-500'>
            {errMessage}
          </p>
          <button 
            className='bg-red-600 rounded-sm p-2 m-2 w-full' onClick={handleButtonClick}>
              {isSignInForm ? 'Sign In' : 'Sign Up'}
          </button>
          <p className='p-2'>
            {isSignInForm ? 'New to Netflix?' : 'Already Registerd?'}
            <span className='font-bold mx-1 cursor-pointer' onClick={handleSignIn}>
              {isSignInForm ? 'Sign up now.' : 'Sign In'}
            </span>
          </p>
        </form>
    </div>
  )
}

export default Login