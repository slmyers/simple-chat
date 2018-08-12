import React from 'react';
import styled, { keyframes } from 'styled-components';
import Chat from "./Chat"
import logo from './logo.svg';
import { ApolloProvider } from 'react-apollo';
import { client } from "./State"
const AppLogoSpin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;
const App = styled.div`
  text-align: center;
  background-color: lightgrey;
  min-height: 100vh
  & #header {
    background-color: #222;
    height: 120px;
    padding: 10px;
    color: white;
    
    & #logo {
      animation: ${AppLogoSpin} infinite 20s linear;
      height: 80px;
    }
    
    & #title {
      font-size: 1.5em;
    }
    
    & > button {
      position: absolute;
      top: 0;
      left: 0;
    }
    
    & > button svg {
      fill: white;
    }
  }
`;
export default () => {
  return (
    <ApolloProvider client={client}>
      <App>
        <header id="header">
          <img src={logo} id="logo" alt="logo" />
          <h1 id="title">Simple Chat</h1>
        </header>
        <Chat id="chat"/>
      </App>
    </ApolloProvider>
  );
}