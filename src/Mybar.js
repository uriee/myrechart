import React from 'react'
import {ResponsiveContainer, BarChart,  Bar, XAxis, YAxis, Legend} from 'recharts';
import {COLORS} from './config.js';
import {Grid,Col,Row}from 'react-bootstrap';


export default React.createClass({
  render() {
    return (
      <Grid>
        <Row className="show-grid"> 
          <Col>  <h3 className='center'>{this.props.title}</h3> </Col>  
        </Row>    
        <Row>
          <Col >  
 
             <BarChart width={this.props.config.width} height={this.props.config.height} data={this.props.data} margin={{top: 30, right: 10, left: 10, bottom: 25}}>
               <XAxis dataKey={this.props.config.X}/>
                <YAxis/>
                <Legend />
                {this.props.config.datakeys.map(function(dk,index) {
                  return <Bar key={index} dataKey={dk.name} stackId={dk.stack} fill={COLORS[index]} />
                  })
                }
                </BarChart> 
   
          </Col>
        </Row>
      </Grid>                
        )
  }
});


