import React, { Component, Fragment, createContext } from 'react';
import { Transition } from  'react-spring';

import './App.css';
import { Toggle } from 'Utilities';
import { Modal } from 'Elements';
import UserProvider from './UserProvider';
import Drag from './Drag';
 
class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <Drag />
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
      </UserProvider>
    );
  }
}


export default App;
