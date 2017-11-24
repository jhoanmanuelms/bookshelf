import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const BookListRow = ({book}) => {
  return (
    <tr>
      <td><Link to={`/book/${book._id}`}>{book.title}</Link></td>
      <td>{book.author}</td>
      <td>{book.genre}</td>
    </tr>
  );
};

BookListRow.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookListRow;
