import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import About from './components/About';
import Authentication from './components/Authentication';
import Counter from './components/Counter';
import EmployeeClassComponent from './components/EmployeeClassComponent';
import EmployeeComponent from './components/EmployeeFnComponent';
import FetchUser from './components/FetchUser';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';
import UserDetails from './components/UserDetails';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'} />} />
        <Route path={'/contacts/list'} element={<FetchUser />} />
        <Route path={'/contacts/:id'} element={<UserDetails />} />
        <Route path={'/about'} element={<About />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;

{/* <React.Fragment>
      <div className="container mt-3">
        <div className="grid">
          <div className="row">
            <div className="col">
              <p className="text-success">Hi dear!!</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio necessitatibus voluptatum facere eveniet velit. Ea, est saepe! Sequi, consequuntur blanditiis!</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmployeeComponent />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EmployeeClassComponent />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Counter />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Greetings />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <LoginForm />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Authentication />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <UserList />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <FetchUser />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment> */}