import React, { Component } from 'react'

export default class Link extends Component {
  render() {
    const { description, url } = this.props.link;
    return (
      <div>
        {description} ({url})
      </div>
    )
  }
}
