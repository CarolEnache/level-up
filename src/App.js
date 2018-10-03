import React, { Component, Fragment } from 'react';
import './App.css';
import ToggleRPC from './ToggleRPC';
import Portal from './Portal';
import Modal from './Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToggleRPC >
          {({on, toggle}) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in Modal</h1>
              </Modal>
            </Fragment>
          )}
        </ToggleRPC>
      </div>
    );
  }
}

export default App;
