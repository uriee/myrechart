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
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/test").then(function (result) {
    	console.log(result.data,getcolumnes(result.data)) ;
        TH.setState({
          data: result.data,
          col: getcolumnes(result.data)
        });
    });
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return (
        <div className='height90'> 

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

