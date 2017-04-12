import React from 'react';
import axios from 'axios';
import Pdemand1 from './Pdemand1';
import Pdemand2 from './Pdemand2';
import Porder1 from './Porder1';
import Porder2 from './Porder2';
import Rmain from './Rmain';
import Rmaout from './Rmaout';
import Rmaday from './Rmagraph';
import Rmaweek from './Rmagraph2';


var Empty = React.createClass({
    render: function() {
        return <div> no script yet </div>
    }
});

var empty = {NAME : Empty , INTERVAL : 1}

var Reactive = React.createClass({
    render: function() {
	if (!this.props.component) return <Empty/>
    else return <this.props.component />
    }
})


var slides = {'Pdemand1':Pdemand1, 'Pdemand2':Pdemand2, 'Porder1':Porder1, 'Porder2':Porder2, 'Rmain':Rmain , 'Rmaout':Rmaout, 'Rmaday':Rmaday, 'Rmaweek':Rmaweek}

export default React.createClass({

  getInitialState: function getInitialState() {
    return {
      script: [empty],
      current: 0
    };
  },


  play(){
	var next = (this.state.current === this.state.script.length-1 ? 0 : this.state.current+1)
	console.log("inplay:",this.state.current,this.state.script)
	this.setState({
	  script: this.state.script,
	  current: next
	});
	setTimeout(() => {this.play(); }, this.state.script[this.state.current].INTERVAL*1000);      
  } ,

  componentDidMount: function componentDidMount() {
    var TH = this;
    this.serverRequest = axios.get("http://192.9.200.17:4000/script/"+TH.props.route.script).then(function (result) {
        TH.setState({
          script: result.data,
          current: 0
        });
    	TH.play();
    });
  },


  componentWillUnmount: function componentWillUnmount() {
    /*this.serverRequest.reject;*/
    console.log("unmount:",this)
  },

  render() {
	
    return (
    	<div className='height90' > 
				<Reactive component={slides[this.state.script[this.state.current].NAME]} />  	
        </div>
  
      )
  }

});

