import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Store from "./components/Store";
import Places from "./components/Places";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Store</Link>
            </li>
            <li>
              <Link to="/places">Places</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Store />} />
          <Route path="/places" element={<Places />} />
        </Routes>
      </div>
    </Router>
  );
}
