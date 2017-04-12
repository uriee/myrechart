import React from 'react'
import axios from 'axios';
import './App.css';
import Mypie from './Mypie.js';
import Mybar from './Mybar.js';
import {getbardata,getpiedata,getLegendData} from './config.js';
import {Text} from 'recharts';



export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      bardata: [],
      pie1: [],
      pie2: [],      
      groups: [],
      legend: []
    };
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/graph/serial1").then(function (result) { 
        const rawdata = result.data;
        const {bardata,groups} = getbardata(rawdata);
        const {piex,piegroups} = getpiedata(rawdata);
        const legend = getLegendData(rawdata);
        const piedata = piegroups;
console.log(rawdata,bardata,groups,piex,piegroups)        ;
        TH.setState({
          bardata: bardata,
          pie1: piex ,         
          pie2: piegroups,
          groups: groups,
          legend: legend
        });
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
//        setTimeout(function(){
//          browserHistory.push('#/Graph1');
//          window.location.reload()      
//        }, 30000);    

    return (
        <div className='height90'>      
        {this.state.legend.map(function(item,i){return <span style={{fontSize: 18}}>
          <Text >{item.label}</Text>          
          <Text style={{color: item.color, fontSize: 25}}>ם &#x25A0;</Text>
         </span>})}
       
         <div className='left75'>
          <Mybar data={this.state.bardata} title='Work Orders By Owner/Status' config={{ X: "X",datakeys:this.state.groups }} />                  </div>

        <div className='left25'> 
        
          <Mypie   data={this.state.pie2} />

 
          </div>        
       </div>
  
      )
  }

});

