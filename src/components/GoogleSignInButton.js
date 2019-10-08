import {createButton} from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import SocialLogin from 'react-social-login'
import React from 'react'


const Button = ({ children, triggerLogin, ...props }) => (
  <GoogleLoginButton onClick={triggerLogin} {...props}>
    { children }
  </GoogleLoginButton> 
);

/** My Facebook login button. */
//const FacebookLoginButton = createButton(config);

export default SocialLogin(Button);