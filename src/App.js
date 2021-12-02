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
          <a
            href="https://github.com/AhoySmallFry/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open source code{" "}
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/jordanamakin/"
            target="_blank"
            rel="noreferrer"
          >
            Jordana Makin
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
