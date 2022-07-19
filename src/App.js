import {useEffect, useRef, useState} from "react";
import {Input} from 'antd';

import logo from './logo.svg';

import './App.css';

function App() {
  const [origin, setOrigin] = useState();
  const myWorker = useRef(new SharedWorker(new URL('./sharedWorker.worker.js', import.meta.url)));
  
  const handleChange = e => {
    myWorker.current.port.postMessage(e.target.value);
    setOrigin(e.target.value);
  };
  
  useEffect(() => {
    myWorker.current.port.onmessage = function (e) {
      console.log(e);
    };
  }, []);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Input placeholder="Basic usage" value={origin} onChange={handleChange} />
        <a
          className="App-link"
          href="/projection"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Projection
        </a>
      </header>
    </div>
  );
}

export default App;
