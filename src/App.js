import "./App.css";
import Layout from "./engine/components/Layout/Layout";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./engine/pages/Home/Home";
import Destination from "./engine/pages/Destination/Destination";
import Crew from "./engine/pages/Crew/Crew";
import Technology from "./engine/pages/Technology/Technology";

function App() {
  const location = useLocation();

  return (
    <div
      className={`App bg_main ${
        location.pathname === "/"
          ? "bg_home"
          : `bg_${location.pathname.substring(1)}`
      }`}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
