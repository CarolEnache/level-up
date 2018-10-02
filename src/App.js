import React, { Component, Fragment } from 'react';
import './App.css';
import ToggleRPC from './ToggleRPC';
import Portal from './Portal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleRPC >
          {({on, toggle}) => (
            <Fragment>
              {on && <h1>Hello World</h1>}
              <button onClick={toggle}>Show/Hidea</button>
              <Portal >
                {on &&<h1>Hi I'm in a portal</h1>}
              </Portal>
            </Fragment>
          )}
        </ToggleRPC>
      </div>
    );
  }
}

export default App;
