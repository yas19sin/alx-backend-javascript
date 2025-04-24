// Task 5: Advanced types Part 1

// Director interface
interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

// Director class implementation
class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }

    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }

    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

// Teacher class implementation
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }

    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }

    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

// Function to create an employee based on salary
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

// Test cases for createEmployee
console.log(createEmployee(200));  // Should return Teacher
console.log(createEmployee(1000)); // Should return Director
console.log(createEmployee('$500')); // Should return Director

// Task 6: Creating functions specific to employees

// Type predicate to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

// Function to execute work based on employee type
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

// Test cases for executeWork
console.log(executeWork(createEmployee(200)));  // Should print: Getting to work
console.log(executeWork(createEmployee(1000))); // Should print: Getting to director tasks

// Task 7: String literal types

// Define subject type
type Subjects = 'Math' | 'History';

// Function to teach class based on today's class
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // TypeScript knows this will never be reached due to the type constraint
    return '';
}

// Test cases for teachClass
console.log(teachClass('Math'));    // Should print: Teaching Math
console.log(teachClass('History')); // Should print: Teaching History