import React, { Component, Fragment, createContext } from 'react';
import { Transition } from  'react-spring';

import './App.css';
import { Toggle } from 'Utilities';
import { Modal, Card } from 'Elements';
import User from './User';
import UserProvider from './UserProvider';
 
class App extends Component {
  render() {
    return (
      <UserProvider>
        <div className="App">
          <User />
          <section>
            <Toggle >
              {({on, toggle}) => (
                <Fragment>
                  <button onClick={toggle}>Show / Hide</button>
                  <Transition
                    from={{ opacity: 0 }} 
                    enter={{ opacity: 1 }} 
                    leave={{ opacity: 0}}>
                    { on && Header }
                  </Transition>
                </Fragment>
              )}
            </Toggle>
          </section>
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

const Header = styles => (
  <Card style={{ ...styles }}>
    <h1 >Show me</h1>  
  </Card>

  );

export default App;
