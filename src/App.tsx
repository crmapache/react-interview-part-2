import React from 'react';

import { CommonEmployee } from './components/CommonEmployee';
import { createEmployees } from './helpers';
import { Employee } from './types';


const { log, clear } = console;

const state: Employee[] = createEmployees()

function App() {
  const employeeClickHandler = (employeeId: number) => {};

  clear();
  log('render App');

  return (
    <div className="wrapper">
      {state.map((employee) => (
        <CommonEmployee
          {...employee}
          clickHandler={employeeClickHandler}
          key={employee.id}
        />
      ))}
    </div>
  );
}

export default App;
