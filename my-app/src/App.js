import React from 'react'
import Header from './components/Header'
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql} from "@apollo/client";

const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <div className= "app">
      <Header/>
    </div>
  )
}

export default App;
