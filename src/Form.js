import React, {Component} from 'react';
import './App.css';
import Tip from './Tip.js';

class Form extends React.Component{
  render(){
    return(
      <div className="app-body">
        <form>
          <input type="text" name="total" placeholder="Total After Tax"></input>
          <select name="tip">
            <option value=".1">10%</option>
            <option value=".15">15%</option>
            <option value=".18">18%</option>
            <option value=".2">20%</option>
            <option value=".22">22%</option>
          </select>
          <input type="text" name="party" placeholder="Size of Party"></input>
          <input type="submit" value="Calculate Tip"/>
        </form>
        <Tip />
    </div>
    );
  }
}


export default Form;
