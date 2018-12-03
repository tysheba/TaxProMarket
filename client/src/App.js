import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StarRating from '../react-star-rating';

class FormComponent extends React.Component {
  render() {
    return (
      <form target="_self" method="Get">
        <StarRating name="react-star-rating" caption="Rate this pro!" totalStars={5} />
        <button type="submit" className="btn btn-primary">Submit Rating</button>
      </form>
    );
  }
}

React.render(<FormComponent />, document.getElementById('star-rating'));

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
