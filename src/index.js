import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import App from './App';




const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjnddfnhj0g0q01glc9x9woh8/master',
  clientState: {
    defaults: {
      todos: [],
      isDarkMode: false
    },
    typeDefs: `
      type Todo {
        id: Int
        value: String
      }
      type Mutation {
        updateTodos(todos: [Todo]!)
      }
      type Query {
        isDarkMode: Boolean
        todos: [Todo]
      }
    `,
    resolvers: {
      Mutation: {
        updateTodos: async (_, { todos }, { cache, getCacheKey }) => {
          await cache.writeData({ data: { todos } });
          return null;
        }
      }
    }
  }
});
export { client }




const Root = () => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}




client.mutate({
  mutation: gql`
    mutation updateTodos($todos: [Todo]!) {
      updateTodos(todos: $todos) @client
    }
  `,
  variables: {
    todos: [{
      id: 1,
      value: 'Woo',
      __typename: 'Todo'
    },
    {
      id: 2,
      value: 'Learning learning learning!',
      __typename: 'Todo'
    }
    ],
  },
});




ReactDOM.render(<Root />, document.getElementById('root'));
