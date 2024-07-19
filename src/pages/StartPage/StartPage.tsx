// import * as React from 'react';
import { Link } from "react-router-dom";
import "./StartPage.css";
import { useState } from "react";
import ToggleTheme from "../../components/ToggleTheme/ToggleTheme";

export function StartPage() {
  const [isDark, setIsDark] = useState<boolean>(true);

  const handleChange = () => {
    setIsDark(!isDark);
  };

  return (

    <div className="start-page" data-theme={isDark ? "dark" : "light"}>
      <div className="start-toggle">
        <h3>Real Time Chat</h3>

        <ToggleTheme checked={isDark} onChange={handleChange} />
      </div>
      <div className="buttons-container">
        <Link to="login">Sign in</Link>

        <Link to="register">Sign up</Link>
      </div>
    </div>
  );
}
