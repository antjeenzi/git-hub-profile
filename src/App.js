import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Profile from './Profile.js';

const client = new ApolloClient({
  uri: 'https://www.graphqlhub.com/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Profile />
      </div>
    </ApolloProvider>
  );
}

export default App;
