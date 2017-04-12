import React from 'react'
import axios from 'axios';
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import {getcolumnes} from './config.js';

export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      data: [],
      col:[]
    };
  },

  componentDidMount: function componentDidMount() {
    var th = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/rmain").then(function (result) {
    	console.log(result.data,getcolumnes(result.data)) ;
        th.setState({
          data: result.data,
          col: getcolumnes(result.data)
        });
    });
  },


  render() {
    return (
        <div className='height90' > 

			<ReactTable
			  className='row'
			  data={this.state.data}
			  columns={this.state.col}
  			  showPagination={false}			  
			/>             
                    
       </div>
  
      )
  }

});

