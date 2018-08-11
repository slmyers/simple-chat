import React, { Component } from 'react';
import Chat from "./Chat"
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';

const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const App = styled.div`
  text-align: center;
  & #header {
    background-color: #222;
    height: 150px;
    padding: 20px;
    color: white;
    
    & #logo {
      animation: ${AppLogoSpin} infinite 20s linear;
      height: 80px;
    }
    
    & #title {
      font-size: 1.5em;
    }
  }
  
  & #intro {
    font-size: large;
  }
`;
export default class extends Component {
  render() {
    return (
      <App>
        <header id="header">
          <img src={logo} id="logo" alt="logo" />
          <h1 id="title">Simple Chat</h1>
        </header>
        <div id="intro">
          These chats persist for a length of time. Please show respect for all people.
        </div>

        <Chat/>

      </App>
    );
  }
}