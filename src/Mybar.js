import React from 'react'
import {ResponsiveContainer, BarChart,  Bar, XAxis, YAxis, Legend} from 'recharts';
import {COLORS} from './config.js';

export default React.createClass({
  render() {
      console.log("heeee---:",this.props);
    return (
      <div className='resp'>
        <h3 >{this.props.title}</h3>  
      <div className='resp'>   
      <ResponsiveContainer     >
        <BarChart  data={this.props.data} margin={{top: 30, right: 10, left: 10, bottom: 25}}>
          <XAxis dataKey={this.props.config.X}/>
          <YAxis/>
          <Legend />
          {this.props.config.datakeys.map(function(dk,index) {
            return <Bar key={index} dataKey={dk.name} stackId={dk.stack} fill={COLORS[index]} />
            })
          }
        </BarChart> 
        </ResponsiveContainer>
      </div>              
      </div>
        )
  }
});


