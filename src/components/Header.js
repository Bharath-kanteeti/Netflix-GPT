import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/fireBase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch()

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}))
          navigate('/browse')
        } else {
          dispatch(removeUser())
          navigate('/')
        }
      });
      // Cleanup subscription on unmount of header component
      return () => unsubscribe();
    }, [])    
  // here we are calling the api call only once that is when the body component is rendered after that for every change in the user state the onAuthStateChanged will be called and the user will be added or removed from the store
  // we can call the onAuthStateChanged in the Login Component or in the App component but it is better to call it in the Body component as it is the parent component of all the other components

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate('/error')
    });
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between'>
      <img className='w-48'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' />
      {user && <div className='p-2 m-2 flex'>
        <img className='rounded-md w-12 h-12'
          src='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp' />
        <p className='p-2 ml-1 my-1 font-bold text-white'>{user.displayName}</p>
        <button className='font-bold text-white px-2 mx-2' onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header