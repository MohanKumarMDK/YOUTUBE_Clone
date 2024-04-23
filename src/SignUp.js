import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className="form">
      <img className='img-goo'
            src='Image/google-logo.png' alt='logo'
            width="100px"/>
            <br></br>

        <div id="upper">
            <p style={{style:"font-size: 26px"}} >Sign in</p>
            <br></br>
            <p>to continue  YouTube?</p>
         
        </div>
        <input placeholder="Email or phone" id="email" type="email" />
        <div id="error"></div>
        <p>Forgot email?</p>
        <p>
          Not your computer? Use Guest mode to sign in privately.
          <span> Learn more</span>
        </p>
        <div id="button">
          <input type="button" value="Create account" id="creat" />
          <input type="submit" value="NEXT" id="signin" />
        </div>
    </div>
  )
}

export default SignUp