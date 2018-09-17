import React, { Component } from 'react';
//import "./Sign_in.css"
import styled, { css } from 'styled-components'

const Button = styled.button`
border-radius: 5px;
padding: 0.25em 1em ;
margin:auto ;
background: #0156e4;
color: WHITE;
border: 2px solid BLACK;
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px
`
const mainColor = 'black'

const Title = styled.h1`
  color: ${props => props.color || 'goldenrod'};
  font-size: 2.8em;
  margin: 25px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${mainColor};
  display: inline-block;
`


class Login extends Component {
  login() {
    let { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
    window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
  }

  render() {
    return (

      <div className={this.props.className}>
        <Title color={mainColor}>A Break In The Silence</Title>

        <Button onClick={this.login}>
          LOGIN
        </Button>
      </div >

    )
  }
}

export default styled(Login)`
width: 100vw;
height: 100vh;
text-align: center;
`;


