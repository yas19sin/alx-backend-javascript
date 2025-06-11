const http = require('http');
const fs = require('fs');

/**
 * Counts students in a CSV database file asynchronously for HTTP response
 * @param {string} path - Path to the CSV file
 * @returns {Promise<string>} - Promise that resolves with student info
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
      return;
    }

    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      try {
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length <= 1) {
          resolve('Number of students: 0');
          return;
        }

        const students = lines.slice(1); // Remove header
        const validStudents = students.filter((line) => {
          const fields = line.split(',');
          return fields.length >= 4 && fields.every((field) => field.trim() !== '');
        });

        let result = `Number of students: ${validStudents.length}\n`;

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
          result += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
        });

        resolve(result.trim());
      } catch (error) {
        reject(new Error('Cannot load the database'));
      }
    });
  });
}

/**
 * Creates a more complex HTTP server
 */
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    try {
      const studentInfo = await countStudents(databasePath);
      res.end(`This is the list of our students\n${studentInfo}`);
    } catch (error) {
      res.end(`This is the list of our students\n${error.message}`);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
