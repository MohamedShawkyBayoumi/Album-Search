import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

import SingleAlbum from './components/SingleAlbum';

import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* <Home /> */}
          <Route exact path="/" component={Home} />
          <Route path="/:id" component={SingleAlbum} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
