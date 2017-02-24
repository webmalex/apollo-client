import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// import ApolloClient, { createNetworkInterface } from 'apollo-client';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
// const client = new ApolloClient();
const client = new ApolloClient({
  // networkInterface: createNetworkInterface({ uri: ':8080' }),
  // connectToDevTools: true
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)
