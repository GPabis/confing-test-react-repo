import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

const App = () => {
  return <h1>Test</h1>
} 

render(<App />, document.getElementById('root'));
