import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Elemets
import Home from './pages/home/Index';
import About from './pages/about/Index';
import Blog from './pages/blog/Index';
import Roadmap from './pages/roadmap/Index';
import Stake from './pages/stake/Index';
import Team from './pages/team';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/blog' element = {<Blog />} />
        <Route path='/roadmap' element = {<Roadmap />} />
        <Route path='/stake' element = {<Stake />} />
        <Route path='/team' element = {<Team />} />
      </Routes>
    </Router>
  )
}

export default App