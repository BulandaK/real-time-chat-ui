import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="layout-container">
      <div className="layout-title">
        <h1>Real Time Chat </h1>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
