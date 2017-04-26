import React from 'react'
import axios from 'axios';
import './App.css';
import Mypie from './Mypie.js';
import {getpiedata} from './config.js';

export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      piedata: [],
    };
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/graph/porder1").then(function (result) { 
        const rawdata = result.data;
        const {piex,piegroups} = getpiedata(rawdata);
        TH.setState({
          piedata: piegroups,
        });
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.reject;
  },

  render() {
    return (
        <div className='height90'>      
          <h3>{this.props.title}</h3>
          <Mypie   data={this.state.piedata} />
        </div>
      )
  }

});

