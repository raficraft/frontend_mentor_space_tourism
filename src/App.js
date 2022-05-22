import logo from "./logo.svg";
import "./App.css";
import Layout from "./engine/components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <h2>Inside Layout</h2>
      </Layout>
    </div>
  );
}

export default App;
