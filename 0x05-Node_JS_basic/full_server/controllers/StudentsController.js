import readDatabase from '../utils';

/**
 * Students Controller
 */
class StudentsController {
  /**
   * Get all students handler
   * @param {Object} request - Express request object
   * @param {Object} response - Express response object
   */
  static getAllStudents(request, response) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((students) => {
        let responseText = 'This is the list of our students\n';

        // Sort fields alphabetically (case insensitive)
        const sortedFields = Object.keys(students).sort(
          (a, b) => a.toLowerCase().localeCompare(b.toLowerCase()),
        );

        sortedFields.forEach((field) => {
          const studentList = students[field];
          responseText += `Number of students in ${field}: ${studentList.length}. List: ${studentList.join(', ')}\n`;
        });

        response.status(200).send(responseText.trim());
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }

  /**
   * Get all students by major handler
   * @param {Object} request - Express request object
   * @param {Object} response - Express response object
   */
  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((students) => {
        const studentList = students[major] || [];
        response.status(200).send(`List: ${studentList.join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
