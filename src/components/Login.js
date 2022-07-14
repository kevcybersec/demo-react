import React from 'react'
import './Login.css'

function Login() {
  return (
    <div className='loginContainer'>
        <form id='form' action='/' method='GET'>
            <div className='input-control'>
                <input type="text" placeholder='Enter Username' id='userName' name='username' onKeyUp="validateUsername"></input>
            </div>

            <div className='input-control'>
                <input type="password" placeholder='Enter Password' id='password' name='password' onKeyUp="validatePassword"></input>
            </div>

            <div className='buttonContainer'>
            <button className='btn-sign signUpButton' type="button">Log In</button>
            </div>
            
            
        </form>

    </div>
  )
}

export default Login