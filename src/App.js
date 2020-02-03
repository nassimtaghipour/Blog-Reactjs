import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from '../src/containers/Blog';

class App extends Component {
  render () {
    return (
    
      <BrowserRouter>
        <div className="App" style={{height: "100% "}} >
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;