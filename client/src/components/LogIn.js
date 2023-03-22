import React from "react";
import LogInForm from "./LogInForm";
import { Button } from "react-bootstrap";
import Signup from "./Signup";
import { useState } from "react";

export default function LogIn({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <div>
      {showLogin ? (
        <>
          <LogInForm onLogin={onLogin} />

          <p className="account">
            Don't have an account? &nbsp;
            <button className="btn-basic" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <Signup onLogin={onLogin} />

          <p className="account">
            Already have an account? &nbsp;
            <button className="btn-basic" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
}
