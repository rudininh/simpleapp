// import logo from './logo.svg';
// import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {
  const [isRefresh, setIsRefresh] = useState(true)

  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Header setRefresh={setRefresh} />
      <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      {/* <h1>Hello World!</h1> */}
    </div>
  );
}

export default App;
