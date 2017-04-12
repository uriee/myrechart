import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'
/*
import Graph1 from './Graph1'
import Graph2 from './Graph2'
import Graph3 from './Graph3'
import Graph4 from './Graph4'
*/
import Graph5 from './Graph5'
import Graph6 from './Graph6'
import Porder1 from './Porder1'
import Porder2 from './Porder2'
import Pdemand1 from './Pdemand1'
import Pdemand2 from './Pdemand2'
import Rmain from './Rmain'
import Rmaout from './Rmaout'
import Rmagraph from './Rmagraph'
import Rmagraph2 from './Rmagraph2'
import Container from './Container'


class App extends Component {

  render() {
    return (
  <Router history={hashHistory}>
    <Route path="/" component={Container}/>
    <Route path="/Graph5" component={Graph5}/> 
    <Route path="/Graph6" component={Graph6}/>   
    <Route path="/Porder1" component={Porder1}/>          
    <Route path="/Porder2" component={Porder2}/>      
    <Route path="/Pdemand1" component={Pdemand1}/>  
    <Route path="/Pdemand2" component={Pdemand2}/>      
    <Route path="/Rmain" component={Rmain}/>  
    <Route path="/Rmaout" component={Rmaout}/> 
    <Route path="/Rmaday" component={Rmagraph} />        
    <Route path="/Rmaweek" component={Rmagraph2} />              
    <Route path="/purchase" component={Container} script="purchase"/> 
    <Route path="/rma" component={Container} script="rma"/>                   
  </Router>
    );
  }
}

export default App;
/*
    <Route path="/Graph2" component={Graph2}/>
    <Route path="/Graph1" component={Graph1}/>
    <Route path="/Graph3" component={Graph3}/>
    <Route path="/Graph4" component={Graph4}/> */