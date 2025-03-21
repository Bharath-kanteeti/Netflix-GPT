import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/fireBase'
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
const Body = () => {
  const dispatch = useDispatch()
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/browse', 
      element: <Browse />
    }
  ])

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}))
      } else {
        dispatch(removeUser())
      }
    });
  }, [])
  // here we are calling the api call only once that is when the body component is rendered after that for every change in the user state the onAuthStateChanged will be called and the user will be added or removed from the store
  // we can call the onAuthStateChanged in the Login Component or in the App component but it is better to call it in the Body component as it is the parent component of all the other components
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body