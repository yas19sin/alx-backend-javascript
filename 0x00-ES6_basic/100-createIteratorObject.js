export default function createIteratorObject(report) {
  const employees = [];
  for (const department of Object.values(report.allEmployees)) {
    employees.push(...department);
  }

  let index = 0;
  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { value, done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
