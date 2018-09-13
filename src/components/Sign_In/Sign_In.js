import React, { Component } from 'react';
import "./Sign_in.css"


export default class Login extends Component {
    login(){
      let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
      
      let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
      window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    }
  render() {
    return (
      <div className='App'>
      <header><h1> A Break In The Silence</h1></header>
        <button onClick={this.login}>LOGIN</button>
      </div>
    )
  }
}






