import react from "react";

import "./App.css";
import Home from "./Home";
import Movieheader from "./Movieheader";

import Moviedetails from "./Moviedetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="moviedetails/:id" element={<Moviedetails />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
