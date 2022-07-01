import React from 'react';
import './App.css';
import Authentication from './components/Authentication';
import Counter from './components/Counter';
import EmployeeClassComponent from './components/EmployeeClassComponent';
import EmployeeComponent from './components/EmployeeFnComponent';
import Greetings from './components/Greetings';
import LoginForm from './components/LoginForm';
import UserList from './components/UserList';

function App() {
  return (
    <React.Fragment>
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
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
