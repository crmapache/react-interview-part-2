import React from 'react';
import cn from 'classnames';

import { Employee } from '../types';

const { log } = console;

interface Props extends Employee {
  clickHandler: (employeeId: number) => void
}

export const CommonEmployee = ({ id, name, salary, clickHandler }: Props) => {
  log(`render ${name}`);

  const salaryClickHandler = (id: number) => () => {
    clickHandler(id);
  };

  return (
    <div className="employee">
      <div className="name">
        {name}
      </div>
      <div
        className={cn('salary', salary >= 10000 ? 'disabled' : '')}
        onClick={salaryClickHandler(id)}
      >
        {salary}$
      </div>
    </div>
  );
};
