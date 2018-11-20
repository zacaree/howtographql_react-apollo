import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { client } from './index';



export default class App extends Component {
  handleClick = () => {
    client.writeData({ data: { isDarkMode: !client.isDarkMode } });
  }
  render() {
    return (
      <Query query={MY_QUERY}>
        {({ loading, data }) => {
          if (loading) return null

          return (
            <div className="App">
              <button onClick={this.handleClick}>
                {data.isDarkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}
              </button>
              <ul>
                {data.todos.map((todo, i) => (
                  <li key={i++}>{`${todo.id}: ${todo.value}`}</li>
                ))}
              </ul>
            </div>
          )
        }}
      </Query>
    );
  }
}


const MY_QUERY = gql`
  query {
    isDarkMode @client
    todos @client {
      id
      value
    }
  }
`

