import "./App.css";
import Dictionary from "./Components/Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">Coded by Yuliia Liuta</footer>
      </div>
    </div>
  );
}

export default App;
