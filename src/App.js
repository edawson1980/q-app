import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Tip Calculator
        </h1>
      </header>
      <div className="app-body">
        <form>
          <input type="number" name="total" placeholder="Total After Tax"></input>
          <select name="tip">
            <option value='.1'>10%</option>
            <option value='.15'>15%</option>
            <option value='.18'>18%</option>
            <option value='.2'>20%</option>
            <option value='.22'>22%</option>
          </select>
          <input type="number" name="party" placeholder="Size of Party"></input>
        </form>

      </div>
    </div>
  );
}

export default App;
