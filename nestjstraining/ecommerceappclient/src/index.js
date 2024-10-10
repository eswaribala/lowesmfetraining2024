import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createClient } from 'graphql-ws';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, HttpLink, split,

} from "@apollo/client";
import {GraphQLWsLink} from "@apollo/client/link/subscriptions";
import {getMainDefinition} from "@apollo/client/utilities";


const httpLink = new HttpLink({
    uri: 'http://localhost:3000/graphql'
});
const wsLink = new GraphQLWsLink(createClient({
    url: 'ws://localhost:3000/graphql',
}));

const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },

    httpLink,
);
const client = new ApolloClient({
     uri: 'http://localhost:3000/graphql/',
    cache: new InMemoryCache(),
    wsLink,
    httpLink
});
ReactDOM.render(
  <React.StrictMode>
      <ApolloProvider client={client}>
          <App />
      </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
