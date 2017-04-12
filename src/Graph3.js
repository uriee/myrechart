import React from 'react'
import axios from 'axios';
import './App.css';
import Mypie from './Mypie.js';
import Mybar from './Mybar.js';
import {getbardata,getpiedata} from './config.js';
import { browserHistory } from 'react-router'


export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      bardata: [],
      pie1: [],
      pie2: [],      
      groups: []
    };
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/graph/porder2").then(function (result) { 
        const rawdata = result.data;
        const {bardata,groups} = getbardata(rawdata);
        const {piex,piegroups} = getpiedata(rawdata);
        const piedata = piegroups;
console.log(rawdata,bardata,groups,piex,piegroups)        ;
        TH.setState({
          bardata: bardata,
          pie1: piex ,         
          pie2: piegroups,
          groups: groups
        });
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
        setTimeout(function(){
          browserHistory.push('#/Graph4');
          window.location.reload()      
        }, 30000);    

    return (
        <div className='height90'>      
         <div className='left75'>
          <Mybar data={this.state.bardata} title='Purchase Orders Aging by Status' config={{ X: "X",
              datakeys:this.state.groups }} />            
        </div>

        <div className='left25'> 
        <div className='leftup'>        
          <Mypie   data={this.state.pie2} />
          </div>
        <div className='leftup'> 
          <Mypie  data={this.state.pie1} />
          </div>  
          </div>        
       </div>
  
      )
  }

});

