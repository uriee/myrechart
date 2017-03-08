import React from 'react'
import axios from 'axios';
import './App.css';
import Mypie from './Mypie.js';
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
        const pdata = bardata.reduce(function (acc,val) {return [acc[0] + val['פתוחות'] , acc[1] + val['סגורות']]} , [0,0]);
        const piedata = [{name : 'סגורות', value : pdata[0]},{name : 'פתוחות', value : pdata[1]}];
        TH.setState({
          bardata: bardata,
          piedata: piedata
        });
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return (
        <div className='height90'>      
         <div className='left75'>
          <Mybar data={this.state.bardata} title='מצב דרישות רכש לתכנון אחרון' config={{ X: "שם",
              datakeys: [{name:"פתוחות", stack:'a'},{name:"סגורות", stack:'a'}] }} />            
        </div>
        <div className='left25'> 
          <Mypie  title='מצב דרישות' data={this.state.piedata} />
          </div>
       </div>
  
      )
  }
});
