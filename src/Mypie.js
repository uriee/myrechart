import React from 'react'
import {PieChart, ResponsiveContainer,  Pie, Cell} from 'recharts';
import {COLORS} from './config.js';

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.35;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text  fontSize={14} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default React.createClass({

  render() {
      console.log("pieee---:",this.props);    
    return (
      <div className='resp'>    
          <h4 className='center'>{this.props.title}</h4> 
      <div className='resp'>          
          <ResponsiveContainer >  
            <PieChart width={this.props.width} height={this.props.height} >
              <Pie
                data={this.props.data} 
                cx={this.props.width/2} 
                cy={this.props.height/4} 
                labelLine={false}
                startAngle={0}          
                label={renderCustomizedLabel}
                paddingAngle={1}    
                innerRadius={this.props.height/12}                
                outerRadius={this.props.height/4} 
                fill="#8884d8"
              >
                {
                  this.props.data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                }
              </Pie>
              </PieChart>
          </ResponsiveContainer>               
          </div>
      </div>        
      )
  }
});
