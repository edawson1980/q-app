import React, {Component} from 'react';
import './App.css';
import Tip from './Tip.js';
import Total from './Total.js';

class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      total: '',
      party: ''
    };


    this.handleTotalChange = this.handleTotalChange.bind(this);
    this.handlePartyChange = this.handlePartyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleTotalChange(event){
    this.setState({total: event.target.value});
  };
  handlePartyChange(event){
    this.setState({party: event.target.value});
  };



  handleSubmit(event){
    let totalAmount = this.state.total;
    let x = Number(totalAmount);
    console.log(typeof x);
    console.log(x);

    let partySize = this.state.party;
    let y = Number(partySize);

    if(!Number.isNaN(x) && !Number.isNaN(y)){
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
          <input type="text" name="total" onChange={this.handleTotalChange} placeholder="Total After Tax"></input>
          <select name="tip">
            <option value=".1">10%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".2">20%</option>
            <option value=".22">22%</option>
          </select>
          <input type="text" name="party" onChange={this.handlePartyChange}  placeholder="Size of Party"></input>
          <input type="submit" value="Calculate Tip"/>
        </form>
        <Tip />
        <Total />
    </div>

    );
  }
}


export default Form;
