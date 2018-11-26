import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Link from './Link';

export default class LinkList extends Component {

  _updateCacheAfterVote = (store, createVote, linkId) => {
    const data = store.readQuery({ query: FEED_QUERY });

    const votedLink = data.feed.links.find(link => link.id === linkId);
    votedLink.votes = createVote.link.votes;

    store.writeQuery({ query: FEED_QUERY, data });
  };


  render() {
    return (
      <Query query={FEED_QUERY}>
        {({loading, data, error}) => {
          if (loading) return <div>Loading...</div>
          if (error) return <div>{ error }</div>

          const linksToRender = data.feed.links;

          return (
            <div>
              {linksToRender.map((link, index) => 
              <Link
                key={link.id}
                link={link}
                index={index}
                updateStoreAfterVote={this._updateCacheAfterVote}
              />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export const FEED_QUERY = gql`
  {
    feed {
      links {
        id
        createdAt
        url
        description
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`