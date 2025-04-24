/**
 * Student interface definition
 */
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "San Francisco"
};

// Create an array of students
const studentsList: Student[] = [student1, student2];

// Render table function
const renderTable = (students: Student[]): HTMLTableElement => {
    // Create table element
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');

    // Create header row
    const headerRow = document.createElement('tr');
    const firstNameHeader = document.createElement('th');
    const locationHeader = document.createElement('th');

    firstNameHeader.textContent = 'First Name';
    locationHeader.textContent = 'Location';

    headerRow.appendChild(firstNameHeader);
    headerRow.appendChild(locationHeader);
    tableBody.appendChild(headerRow);

    // Create rows for each student
    students.forEach((student) => {
        const row = document.createElement('tr');

        const firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;

        const locationCell = document.createElement('td');
        locationCell.textContent = student.location;

        row.appendChild(firstNameCell);
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    // Only append to document body when in browser environment
    if (typeof document !== 'undefined' && document.body) {
        document.body.appendChild(table);
    }

    return table; // Return the table for testing
};

// Call the render function when the DOM is loaded
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        renderTable(studentsList);
    });
}

// Export for testing
export { Student, studentsList, renderTable };