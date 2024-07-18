// import * as React from 'react';
import { Link } from "react-router-dom";
import "./StartPage.css";

export function StartPage() {
  return (
    <div className="start-page">
      <div className="buttons-container">
        <Link to="/login">Sign in</Link>

        <Link to="register">Sign up</Link>
      </div>
    </div>
  );
}
