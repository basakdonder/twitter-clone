import "./App.css";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import TrendsContainer from "./components/TrendsContainer/TrendsContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <TrendsContainer />
    </div>
  );
}

export default App;
