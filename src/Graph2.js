import React from 'react'
import {Grid,Col,Row}from 'react-bootstrap';
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
    this.serverRequest = axios.get("http://192.9.200.17:4000/graph/pdemand2").then(function (result) { 
        const bardata = result.data.red;
      //  const pdata = bardata.reduce(function (acc,val) {return [acc[0] + val['Y'] , acc[1] + val['סגורות']]} , [0,0]);
      //  const piedata = [{name : 'סגורות', value : pdata[0]},{name : 'פתוחות', value : pdata[1]}];
      const piedata = {};
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
      <Grid>
        <Row className="show-grid"> 
          <Col sm={12} >  <h3 className='center'> מצב דרישות רכש לתכנון אחרון</h3> </Col>
          <Col sm={8} md={8}>
          <Mybar data={this.state.bardata} config={{height: 600, width: 600, X: "X",
              datakeys: this.state.bardata
                .map(function(item){return item.GROUPS})
                .filter(function(item, i, ar){ return ar.indexOf(item) === i; })
                .map(function(item,i){ return {name: item, color: i}})
              }} />            
           </Col> 
           <Col sm={4} md={4}>
            <Mypie width={500} height={500} data={this.state.piedata} />
           </Col>
         </Row>
       </Grid>        
      )
  }
});