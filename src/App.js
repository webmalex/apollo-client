import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './PostList';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
// import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// const client = new ApolloClient();
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'http://localhost:8080/graphql' }),
  // connectToDevTools: true
  // dataIdFromObject: r => r.id,
});

class App extends Component {
  render() {
    return (
    <ApolloProvider client={client}>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PostList/>
      </div>
    </ApolloProvider>
    );
  }
}

export default App;
