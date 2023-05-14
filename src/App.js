import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="navbar">
          <li>about</li>
          <li>contribute</li>
          <li>rules</li>
        </ul>
      </nav>
      <main>
        <h1>Random Command</h1>
        <h2>Totally Randomized Command Generator</h2>
        <button className="primary">Generate</button>
      </main>
    </div>
  );
}

export default App;
