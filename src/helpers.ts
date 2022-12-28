export const createEmployees = (n = 10) => {
  const employees = [];

  for (let i = 0; i < n; i++) {
    employees.push({ id: i, name: `Employee ${i + 1}`, salary: 1000 });
  }

  return employees
}
