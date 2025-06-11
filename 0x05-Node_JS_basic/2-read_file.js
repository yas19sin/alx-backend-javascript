const fs = require('fs');

/**
 * Counts students in a CSV database file synchronously
 * @param {string} path - Path to the CSV file
 */
function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');

    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    const students = lines.slice(1); // Remove header
    const validStudents = students.filter((line) => {
      const fields = line.split(',');
      return fields.length >= 4 && fields.every((field) => field.trim() !== '');
    });

    console.log(`Number of students: ${validStudents.length}`);

    const fieldGroups = {};
    validStudents.forEach((student) => {
      const [firstname, , , field] = student.split(',');
      if (!fieldGroups[field]) {
        fieldGroups[field] = [];
      }
      fieldGroups[field].push(firstname);
    });

    Object.keys(fieldGroups).forEach((field) => {
      const students = fieldGroups[field];
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
