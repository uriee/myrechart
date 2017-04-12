import React from 'react'
import axios from 'axios';
import './App.css';
import Mybar from './Mybar.js';


export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      bardata: [],
      piedata: []
    };
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/graph/pdemand1").then(function (result) { 
        const bardata = result.data;
        TH.setState({
          bardata: bardata,
          piedata: piedata
        });
    });
  },

/*
  componentWillUnmount: function componentWillUnmount() {
    console.log(this.serverRequest).abort();
  },
*/
  render() {

    return (
        <div className='height90'>      
          <Mybar data={this.state.bardata} title='מצב דרישות רכש לתכנון אחרון' config={{ X: "שם",
              datakeys: [{name:"פתוחות", stack:'a'},{name:"סגורות", stack:'a'}] }} />            
        </div>

      )
  }
});
