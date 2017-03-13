import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
import Graph1 from './Graph1'
import Graph2 from './Graph2'
import Graph3 from './Graph3'
import Graph4 from './Graph4'


class App extends Component {
  render() {
    return (
  <Router history={hashHistory}>
    <Route path="/" component={Graph1}/>
    <Route path="/Graph2" component={Graph2}/>
    <Route path="/Graph1" component={Graph1}/>
    <Route path="/Graph3" component={Graph3}/>
    <Route path="/Graph4" component={Graph4}/> 
  </Router>
    );
  }
}

export default App;
