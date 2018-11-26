import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Login from './Login';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Search from './Search';
// import Fetcheroo from '../Fetcheroo';
// import { Query } from 'react-apollo';
// import gql from 'graphql-tag';



export default class App extends Component {
  render() {
    return (
      <div className="center w85">
        {/* <Fetcheroo /> */}
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </div>
      </div>
    );
  }
}



