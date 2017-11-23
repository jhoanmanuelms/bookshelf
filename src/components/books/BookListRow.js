import React, { PropTypes } from 'react';

const BookListRow = ({book}) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
    </tr>
  );
};

BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;
