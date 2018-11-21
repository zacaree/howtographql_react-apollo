// This works. Now I need to get the data into ApolloClient
import React, { Component } from 'react';
import {client} from './index';
import gql from 'graphql-tag';


export default class Fetcheroo extends Component {
  state = {
    products: []
  }


  async componentDidMount() {
    const productsData = await client.query({
      query: gql`
      {
        feed {
          links {
            id
            description
          }
        }
      }
    `
    }).then(response => response.data.feed.links)

    this.setState({ products: productsData })
  }
  

  render() {
    console.log(this.state.products);
    return (
      <div>
        
      </div>
    )
  }
}
