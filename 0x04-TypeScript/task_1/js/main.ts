/**
 * Task 1: Teacher Interface
 */
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow additional attributes
}

// Example usage of Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
};

console.log(teacher3);

/**
 * Task 2: Directors interface extending Teacher
 */
interface Directors extends Teacher {
    numberOfReports: number;
}

// Example usage of Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

/**
 * Task 3: printTeacher function interface
 */
interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implementation of printTeacher function
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Should print: J. Doe

/**
 * Task 4: StudentClass interface and implementation
 */
interface StudentClassInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}

interface StudentConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// Example usage of StudentClass
const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // Should print: Alice
console.log(student.workOnHomework()); // Should print: Currently working