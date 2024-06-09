import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { All } from './All';
import { FullStack, DataScience, CyberSecurity, Career } from './App';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">All</Link></li>
            <li><Link to="/fullstack">Full Stack Development</Link></li>
            <li><Link to="/datascience">Data Science</Link></li>
            <li><Link to="/cybersecurity">CyberSecurity</Link></li>
            <li><Link to="/career">Career</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/fullstack" element={<FullStack />} />
          <Route path="/datascience" element={<DataScience />} />
          <Route path="/cybersecurity" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;
