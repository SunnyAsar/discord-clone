import React from 'react'
import '../styles/login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'

function Login() {
  const signIn = ()=> {
    auth.signInWithPopup(provider)
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
      <h2> login page</h2>
      <div className="login__logo">
        <img src="https://www.podfeet.com/blog/wp-content/uploads/2018/02/discord-logo.png" alt="discord logo"/>
      </div>

      <Button onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login
