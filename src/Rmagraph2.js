import React from 'react'
import axios from 'axios';
import './App.css';
import Mybar from './Mybar.js';
import {getbardata} from './config.js';


export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      bardata: [],
      groups: []
    };
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/rmag/10080").then(function (result) { 
      console.log(result.data)
        const rawdata = result.data;
        const {bardata,groups} = getbardata(rawdata);        
        TH.setState({
          bardata: bardata,
          groups: groups
        });
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.reject;
  },

  render() {
    /*var tf = (this.props.route.timeframe === 1440 ? ' Days' : ' Weeks');*/
    return (
        <div className='height90'>      
          <Mybar data={this.state.bardata} title={'Awaiting RMA (Quantity/Weeks) '} config={{ X: "X",
              datakeys:this.state.groups }} />            
        </div>

  
      )
  }

});

