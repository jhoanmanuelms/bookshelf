import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../actions/bookAction';
import BooksList from './BooksList';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { books } = this.props;

    return (
      <div>
        <h1>Books</h1>
        <BooksList books={books} />
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
