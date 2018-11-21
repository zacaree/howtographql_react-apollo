import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';
// import { defaults, resolvers } from './ClientState';



const client = new ApolloClient({
  uri: 'http://localhost:4000',
  clientState: {
    // defaults,
    // resolvers
    defaults: {},
    resolvers: {}
  }
});



const Root = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  )
}



ReactDOM.render(<Root />, document.getElementById('root'));


