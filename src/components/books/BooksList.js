import React, { PropTypes } from 'react';
import BookListRow from './BookListRow';

const BooksList = ({books}) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => <BookListRow key={book._id} book={book} />)}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksList;
