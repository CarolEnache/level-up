import React, { Component } from 'react';
import './App.css';
import ToggleRenderProps from './ToggleRenderProps'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleRenderProps render={({on, toggle}) => (
          <div>
            {on &&<h1>Hello World</h1>}
            <button onClick={toggle}>Show/Hidea</button>
          </div>
        )}
        
        />
      </div>
    );
  }
}

export default App;
