import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home'; 
import About from './Views/About';
import Portfolio from './Views/Portfolio';
import Contact from './Views/Contact';

const AppRouter = () => 
{
    return (
      <Router>
        <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRouter;
