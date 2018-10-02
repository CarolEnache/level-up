import React, { Component } from 'react';
import './App.css';
import ToggleRPC from './ToggleRPC';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleRPC >
          {({on, toggle}) => (
            <div>
              {on && <h1>Hello World</h1>}
              <button onClick={toggle}>Show/Hidea</button>
            </div>
          )}
        </ToggleRPC>
      </div>
    );
  }
}

export default App;
