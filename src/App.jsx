import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store'; // Update path according to your structure
import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Welcome to React Redux with Vite</h1>
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
