import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import User from './user';
import NotFound from './not-found';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/profile' element={<Navigate to="/about" replace />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
