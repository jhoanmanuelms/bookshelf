import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../actions/bookAction';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  renderBookRow(book, index) {
    return (
      <tr key={index}>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td>{book.genre}</td>
      </tr>
    );
  }

  render() {
    return (
      <div>
        <h1>Books</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {this.props.books.map(this.renderBookRow)}
          </tbody>
        </table>
      </div>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(booksActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
