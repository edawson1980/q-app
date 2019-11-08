import React, {Component} from 'react';
import './App.css';
import Tip from './Tip.js';
import Total from './Total.js';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
  };



  handleSubmit(event){
    let x = this.state.value;
    if(x != NaN){
      alert('Thanks!');
    }else{
      alert('Please input a numeric value')
    }
    event.preventDefault();
  }

  render(){
    return(
      <div className="app-body">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="total" value={this.state.value} onChange={this.handleChange} placeholder="Total After Tax"></input>
          <select name="tip">
            <option value=".1">10%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".2">20%</option>
            <option value=".22">22%</option>
          </select>
          <input type="text" value={this.state.value} onChange={this.handleChange} name="party" placeholder="Size of Party"></input>
          <input type="submit" value="Calculate Tip"/>
        </form>
        <Tip />
        <Total />
    </div>

    );
  }
}


export default Form;
