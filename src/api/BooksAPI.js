import * as request from 'superagent';

export const  getAllBooks = () => {
  const getAllBooksRequest = request.get('http://localhost:8000/api/books')
  return executeRequest(getAllBooksRequest);
};

const executeRequest = (request) => {
  return new Promise((resolve) => {
    request.end(
      (error, response) => {
        if (error) {
          console.log(`Error while executing request: URL: ${request.url} Error: '${error}'`);
          throw(error);
        }
        resolve(response);
      });
  });
}
