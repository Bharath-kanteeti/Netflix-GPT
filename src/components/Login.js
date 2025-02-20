import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const handleSignIn = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_large.jpg' alt='logo' />
        </div>
        <form className='bg-black rounded-md absolute m-48 mx-auto right-0 left-0 p-12 w-1/4 text-white bg-opacity-85'>
          <h1 className=' font-bold p-2 text-2xl'> 
            {isSignInForm ? 'Sign In' : 'Sign Up'}
          </h1>
          {
            !isSignInForm && <input 
            type = 'text' 
            placeholder = 'User name' 
            className='text-black w-full p-2 m-2 bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          }
          <input 
            type = 'text' 
            placeholder = 'Email or Phone number' 
            className='text-black w-full p-2 m-2 bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          <input 
            type = 'password' 
            placeholder = 'Password' 
            className='text-black p-2 m-2 w-full bg-zinc-800 bg-opacity-60 border border-white rounded-sm'
          />
          <button 
            className='bg-red-600 rounded-sm p-2 m-2 w-full'>
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