import React, { useState } from 'react';
import axios from 'axios';

const Fib = (props) => {
  const [seenIndexes, setSeenIndexes] = useState([]);
  const [values, setValues] = useState({});
  const [index, setIndex] = useState('');

  const getValues = () => {
    axios.get('/api/values/current')
      .then(res => {
        setValues(res.data);
      });
  }

  const getIndexes = () => {
    axios.get('/api/values/all')
      .then(res => {
        setSeenIndexes(res.data);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSeenIndexes([...seenIndexes, index]);
    setIndex('');
  }

  const handleReset = () => {
    setSeenIndexes([]);
    setValues({});
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your index:</label>
        <input value={index} onChange={e => setIndex(e.target.value)} />
        <button>Submit</button>
      </form>
      <button onClick={getValues}>Get Values</button>
      <button onClick={getIndexes}>Get Indexes</button>
      <button onClick={handleReset}>Reset</button>
      <h3>Indexes I have seen:</h3>
      {seenIndexes.map(i => <div key={i}>{i}</div>)}
      <h3>Calculated Values:</h3>
      {Object.keys(values).map(key => <div key={key}>Fibonacci of {key} is {values[key]}</div>)}
    </div>
  );
}

export default Fib; 
