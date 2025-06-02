import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      This is Hello World
      <p>This is branch-dev-a</p>
      <h1>Test Git Stash from branch dev-a</h1>
      <h2>Add text h2 from dev-b</h2>
      <span>TEST GIT FETCH</span>
      <Footer />
    </div>
  );
}

export default App;
