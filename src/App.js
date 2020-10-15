import React, { useEffect } from 'react';
import './App.css';
import Chat from './features/Chat';
import Sidebar from './features/Sidebar';
import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from './features/userSlice'
import Login from './features/Login';
import { auth } from './features/firebase'
import { login, logout } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((authuser)=> {
      if(authuser) {
        //here
        dispatch(login({
          uid: authuser.uid,
          photo: authuser.photoURL,
          email: authuser.email,
          displayName: authuser.displayName

        }))
      } else {
        //not here
        dispatch(logout())
      }
    })
  }, [dispatch])



  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar/>
          <Chat/>
        </>
      ): (
      <Login />
      )}
    </div>
  );
}

export default App;
