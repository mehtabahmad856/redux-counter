// import { useState } from 'react'
// import logo from './logo.svg'
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './components/counter';
import store from './store/store';
import './App.css';



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Provider store={store}>
      <Counter className="counter" />
    </Provider>
    
    
    </div>
  )
}

export default App
