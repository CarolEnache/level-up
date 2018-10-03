import React, { Component, Fragment } from 'react';
import './App.css';
import { Toggle, Portal, Modal } from './Utilities';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle >
          {({on, toggle}) => (
            <Fragment>
              <button onClick={toggle}>Login</button>
              <Modal on={on} toggle={toggle}>
                <h1>Still in Modal</h1>
              </Modal>
            </Fragment>
          )}
        </Toggle>
      </div>
    );
  }
}

export default App;
