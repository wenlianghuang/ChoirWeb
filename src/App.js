import logo from './logo.svg';
import './App.css';

function App() {
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
      <body>
        <h3>1.change the file and add to git</h3>
        <h3>2.npm run build</h3>
        <h3>3.npm run deploy</h3>
        <h3>4.Finish</h3>
      </body>
    </div>
  );
}

export default App;
