import React from 'react'
import {PieChart, ResponsiveContainer,  Pie, Cell } from 'recharts';
import {COLORS} from './config.js';

const RADIAN = Math.PI / 180;   


const renderActiveShape = (props) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
    fill, payload, percent, value ,index} = props;


  var u = Math.max(cx,cy,130);
  var r = Math.min(cx/cy,cy/cx,0.75);
  const ex = cx-cx*r*1.4
  const ey = (index+1)*10*cy/50;
  const textAnchor = 'start' ;

  const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);  


  return (
    <g>
      <text fontSize={u/8} x={ex } y={ey} dy={0} textAnchor={textAnchor} fill={fill}>&#x25A0; </text>
      <text fontSize={u/13} x={ex+cx/13} y={ey} dy={0} textAnchor={textAnchor} fill="#333">{payload.name}</text>      
    <text  fontSize={u/13} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>      
    </g>
  );
};

 
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.45;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  const u = Math.min(cx.cy);


  return (
    <g>
    <text  fontSize={u/15} x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}  dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
    </g>
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
                labelLine={false}
                startAngle={0}          
                label={renderActiveShape}
                paddingAngle={1}    
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
/*
              <Pie
                data={this.props.data} 
                cx={this.props.width/2} 
                cy={this.props.height/4} 
                labelLine={false}
                startAngle={0}          
                label={renderCustomizedLabel}
                paddingAngle={1}    
                innerRadius={this.props.height/12}                
                outerRadius={this.props.height/2} 
                fill="#8884d8"
              >
*/