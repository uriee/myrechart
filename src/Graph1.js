import React from 'react'
import {BarChart, Bar, CartesianGrid, XAxis, YAxis, Legend} from 'recharts';
/*import axios from 'axios';*/



export default React.createClass({

data :  [
      {name: 'אורי', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 5800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
],

  getInitialState: function getInitialState() {
    return {
      data: [],
    };
  },

  componentDidMount: function componentDidMount() {
/*    this.serverRequest = axios.get("http://192.168.7.223:4000/feedback/500").then(function (result) { 
      th.setState({
        data: result.data,


      });
    });*/
    this.setState({data: this.data})
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <BarChart width={600} height={300} data={this.state.data}
            margin={{top: 20, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Legend />
       <Bar dataKey="pv" stackId="a" fill="#8884d8" />
       <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
       <Bar dataKey="amt" stackId="b" fill="#a2aaad" />   
       <Bar dataKey="uv" stackId="c" fill="#82ca9d" />           
      </BarChart> 
      )
  }
});
