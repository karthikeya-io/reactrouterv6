import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
//useParam, useNavigate
import App from './App';
import Bundles from './Bundles';
import Courseid from './Courseid';
import Courses from './Courses';
import Learn from './Learn';

const Dashboard = () => {
  const location = useLocation()
  return (
    <div>
        <h1>Info that I got here is {location.state}</h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>}></Route>
      <Route path='/myapps' element={<Navigate replace to="/learn"/>}></Route>
      <Route path='/learn' element={<Learn/>}>
        <Route path='courses' element={<Courses/>}>
          <Route path=':courseid' element={<Courseid/>}></Route>
        </Route>
        <Route path='bundles' element={<Bundles/>}></Route>
      </Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
    
  </Router>
);

