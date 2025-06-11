import fs from 'fs';

/**
 * Reads the database asynchronously and returns an object of arrays
 * @param {string} filePath - Path to the CSV file
 * @returns {Promise<Object>} - Promise that resolves with student data organized by field
 */
function readDatabase(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            try {
                const lines = data.split('\n').filter((line) => line.trim() !== '');

                if (lines.length <= 1) {
                    resolve({});
                    return;
                }

                const students = lines.slice(1); // Remove header
                const validStudents = students.filter((line) => {
                    const fields = line.split(',');
                    return fields.length >= 4 && fields.every((field) => field.trim() !== '');
                });

                const fieldGroups = {};
                validStudents.forEach((student) => {
                    const [firstname, , , field] = student.split(',');
                    if (!fieldGroups[field]) {
                        fieldGroups[field] = [];
                    }
                    fieldGroups[field].push(firstname);
                });

                resolve(fieldGroups);
            } catch (error) {
                reject(new Error('Cannot load the database'));
            }
        });
    });
}

export default readDatabase;
