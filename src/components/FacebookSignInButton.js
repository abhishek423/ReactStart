import {createButton} from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import SocialLogin from 'react-social-login'
import React from 'react'

const config = {
  text: "Login with Facebook",
  icon: "facebook",
  iconFormat: name => `fa fa-${name}`,
  style: { background: "#3b5998" },
  activeStyle: { background: "#293e69" }
};

const Button = ({ children, triggerLogin, ...props }) => (
  <FacebookLoginButton onClick={triggerLogin} {...props}>
    { children }
  </FacebookLoginButton> 
);

/** My Facebook login button. */
//const FacebookLoginButton = createButton(config);

export default SocialLogin(Button);