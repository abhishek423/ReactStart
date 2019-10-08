import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import SocialButton from './SocialButton';
import FacebookSignInButton from "./FacebookSignInButton";
import GoogleSignInButton from "./GoogleSignInButton";

import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";

const handleSocialLogin = (user) => {
    console.log(user)
    console.log("Data Retrieved from loginEmail : "+user.profile.email)
    
  }
   
const handleSocialLoginFailure = (err) => {
    console.error(err)
}
export default class SocialButtonDisplay extends Component {

    constructor(props) {
        super(props)
        
        this.state = { 
            color : "red" ,
            width: (window.screen.width * window.devicePixelRatio)/2,
            height: (window.screen.height * window.devicePixelRatio)/2
        }
    }

    render(){
        
        return(
            <View>
                

                
                {/* <FacebookLoginButton > */}
                {/* <SocialButton
                    provider='facebook'
                    appId='408403753204989'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    >
                    facebook login

                </SocialButton> */}
                <FacebookSignInButton
                    provider='facebook'
                    appId='408403753204989'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    >
                    facebook login
                </FacebookSignInButton>
                {/* </FacebookLoginButton> */}
                {/* <GoogleLoginButton> */}
                <GoogleSignInButton
                    provider='google'
                    appId='992475937721-a835ra30huvfb886d2r374o2pidta85v.apps.googleusercontent.com'
                    onLoginSuccess={handleSocialLogin}
                    onLoginFailure={handleSocialLoginFailure}
                    >
                    google login

                </GoogleSignInButton>
                {/* </GoogleLoginButton> */}
            </View>
           
        )
    }
}

const styles = StyleSheet.create({
    redContainer: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      //height : this.state.height,
      //width:this.state.width
    },
    greenContainer: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
        //height : this.state.height,
        //width:this.state.width
      }
});