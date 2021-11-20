import "./App.css";
import AhoyLogo from "./ahoy-logo.svg";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={AhoyLogo} className="App-logo" alt="logo" />
        </header>

        <main>
          <Search />
        </main>

        <footer className="App-footer">
          <small>Coded by Jordana Makin</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
