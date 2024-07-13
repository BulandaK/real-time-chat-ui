// import React from 'react'
import './LoginPage.css'
//import img from '../../assets/loginImage.jpg'
import LoginForm from '../../components/LoginForm/LoginForm'
import ToggleTheme from '../../components/ToggleTheme/ToggleTheme'

function LoginPage() {
  return (
    <div className='login-page-container'>
      <div className='login-page-img'>
        {/* <img src={img} alt="login image" /> */}
      </div>
      <div className='login-page-form'>
        <div className='toggle-theme'>
          <ToggleTheme />
        </div>
        <LoginForm />
      </div >
    </div >
  )
}

export default LoginPage