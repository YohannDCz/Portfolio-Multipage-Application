import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Stack from "./components/stack.tsx/stack";
import Contact from "./components/contact/contact";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App
