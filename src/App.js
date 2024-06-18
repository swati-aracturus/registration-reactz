import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./components/Home";
import Register from "./components/Register";
import Google from "./components/Google";
import Verify from "./components/Verify";
import Change from "./components/Change";
import Emailver from "./components/Emailverified";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/google" element={<Google />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/change" element={<Change />} />
          <Route path="/email-verified" element={<Emailver />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
