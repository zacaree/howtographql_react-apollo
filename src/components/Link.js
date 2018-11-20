import React, { Component } from 'react';
// import gql from 'graphql-tag';
// import { client } from '../index';

export default class Link extends Component {
  render() {
    const { description, url } = this.props.link;
    return (
      <div>
        <p>{description} ({url})</p>

      </div>
    )
  }
}

