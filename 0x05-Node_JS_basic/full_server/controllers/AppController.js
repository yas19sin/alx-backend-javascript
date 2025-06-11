/**
 * App Controller
 */
class AppController {
  /**
   * Homepage handler
   * @param {Object} request - Express request object
   * @param {Object} response - Express response object
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello ALX!');
  }
}

export default AppController;
