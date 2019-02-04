import React, { Component } from 'react';
import useInterval from 'use-interval'
import './App.css';

const App = () => {
  let [count, setCount] = React.useState(0);

  useInterval(() => {
    // Your custom logic here
    setCount(count + 1);
  }, 1000);

  return <h1>{count}</h1>;
}

export default App;
