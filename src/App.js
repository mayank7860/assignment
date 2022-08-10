import react from "react";

import "./App.css";
import Home from "./Home";
import Movieheader from "./Movieheader";

import IndMovie from "./IndMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="indmovie/:id" element={<IndMovie />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
