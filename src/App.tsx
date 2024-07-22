import { Outlet } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="app-container" >
      <Layout />

      <Outlet />
    </div>
  );
}

export default App;
