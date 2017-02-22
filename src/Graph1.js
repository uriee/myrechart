import React from 'react'
import {BarChart, PieChart, Pie, Bar, CartesianGrid, XAxis, YAxis, Legend} from 'recharts';
import axios from 'axios';
import './App.css';


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
        const piedata = [{'סגורות':pdata[0]},{'פתוחות':pdata[1]}];
      TH.setState({
        bardata: bardata,
        piedata: piedata
      });
    });
/*    this.setState({data: this.data})*/
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return (
      <div > 
      <h3 className='center'> מצב דרישות רכש לתכנון אחרון</h3>
        <BarChart width={600} height={300} data={this.state.bardata}
              margin={{top: 40, right: 10, left: 10, bottom: 25}}>
         <XAxis dataKey="שם"/>
         <YAxis/>

         <Legend />
         <Bar dataKey="פתוחות" stackId="a" fill="#8884d8" />
         <Bar dataKey="סגורות" stackId="a" fill="#82ca9d" />
        </BarChart> 
        <PieChart width={730} height={250}  margin={{top: 40, right: 10, left: 10, bottom: 25}}>
          <Pie data={this.state.piedata} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart> 
      </div>
      )
  }
});
/*
        <BarChart width={600} height={300} data={this.state.bardata}
              margin={{top: 40, right: 60, left: 40, bottom: 25}}>
         <XAxis dataKey="שם"/>
         <YAxis/>
         <CartesianGrid strokeDasharray="3 3"/>
         <Legend />
         <Bar dataKey="פתוחות" stackId="a" fill="#8884d8" />
         <Bar dataKey="סגורות" stackId="a" fill="#82ca9d" />
        </BarChart> 
        <PieChart width={730} height={250}  margin={{top: 40, right: 60, left: 40, bottom: 25}}>
          <Pie data={this.state.piedata} cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart> 
 
       */