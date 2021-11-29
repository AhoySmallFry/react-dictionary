import "./App.css";
import AhoyLogo from "./ahoy-logo.svg";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <img src={AhoyLogo} className="App-logo" alt="logo" />
        <header className="App-header">Dictionary</header>

        <main>
          <Search defaultSearchTerm="promising" />
        </main>

        <footer className="Footer">
          <small>Coded by Jordana Makin</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
