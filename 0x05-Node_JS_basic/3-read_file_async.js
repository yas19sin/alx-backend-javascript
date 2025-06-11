const fs = require('fs');

/**
 * Counts students in a CSV database file asynchronously
 * @param {string} path - Path to the CSV file
 * @returns {Promise} - Promise that resolves when done
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          console.log('Number of students: 0');
          resolve();
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

        resolve();
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

module.exports = countStudents;
