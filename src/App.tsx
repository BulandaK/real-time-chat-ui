import { Outlet } from "react-router-dom";
import "./App.css";
import ToggleTheme from "../src/components/ToggleTheme/ToggleTheme";
import Layout from "./components/Layout/Layout";
import { ThemeProvider } from "./components/ToggleTheme/ThemeContext";
function App() {


  return (
    <ThemeProvider>
      <Layout />

      <Outlet />
      <div className="toggle-theme">
        <ToggleTheme />
      </div>
    </ThemeProvider>
  );
}

export default App;
