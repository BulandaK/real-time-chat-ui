import { Outlet } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="layout-container">
      <div className="layout-title">
        <h1>Real Time Chat </h1>
        <div className="buttons-container">
          <Link to="/login">Sign in</Link>

          <Link to="register">Sign up</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
