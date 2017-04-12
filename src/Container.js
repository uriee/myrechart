import React from 'react';
import axios from 'axios';
import pdemand1 from './Graph1';
import pdemand2 from './Graph2';
import porders1 from './Graph3';
import porders2 from './Graph4';

var $test = React.createClass({
    render: function() {
        return <span>hello</span>
    }
})

$test = pdemand1;

export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      script: [],
      current: 0
    };
  },

  play: function(){
  	var state = this.state
  	var len = state.script.length;
  	var next = (state.current == len-1 ? 0 : state.current +1);
    this.setState({
      script: state.script,
      current: next
    });
    console.log("PLAY",this.state,next,state.script.length,$test) ;
    $test = eval(this.state.script[this.state.current].NAME);
    //setTimeout(this.play(this).bind(this),this.state.script[this.state.current].INTERVAL*1000);    
  },

  changeScript: function(TH){
  	var state = TH.state
  	this.serverRequest = axios.get("http://192.9.200.17:4000/script/"+this.props.route.script).then(function (result) {
  		console.log("CHANGESCRIPT",result.data) ;
  		if (result.data !== state.script ){
  			//clearTimeouts();
		    TH.setState({
		      script: result.data,
		      current: 0
		    });
		    //TH.play().bind(this);
		    //setTimeout(TH.play(TH),TH.state.script[TH.state.current].INTERVAL*1000);
  		}
  	});
  },


  componentDidMount: function componentDidMount() {
    const TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/script/"+TH.props.route.script).then(function (result) {
        TH.setState({
          script: result.data,
          current: 0
        });
    	console.log("DIDMOUNT:",result.data,TH.state,TH.state.script[TH.state.current].INTERVAL*1000) ; 
    	//TH.play()       ;
    	setInterval(TH.play,10000);
        //setTimeout(TH.play().bind(TH),TH.state.script[TH.state.current].INTERVAL*1000); 
        //setTimeout(function(){console.log("cc",this)},1000)  ;
    });
  },

  shouldComponentUpdate: function( newProps, newState ) {
   	//console.log("scu:",newProps, newState, newState.script[newState.current].INTERVAL);
  	//setTimeout(TH.play(),newState.script[newState.current].INTERVAL*1000);
  	return true;
  },

  componentWillUnmount: function componentWillUnmount() {
    this.serverRequest.abort();
  },

  render() {
    return (
    	<div className='height90'> 
             <$test/>      
        </div>
  
      )
  }

});