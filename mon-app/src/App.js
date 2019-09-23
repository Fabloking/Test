import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Boutique
        </p>
      </header>
      <head>
    <title>Socket.IO chat</title>
      </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
  </body>
    </div>
  );
}

export default App;
