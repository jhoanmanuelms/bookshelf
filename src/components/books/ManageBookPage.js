import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as booksActions from '../../actions/bookAction';
import BookForm from './BookForm';

class ManageBookPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <BookForm
        book={this.props.book}
        allGenres={[]}
        errors={this.props.errors}
        onChange={() => {}}
        onSave={() => {}} />
    );
  }
}

ManageBookPage.propTypes = {
  book: PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const book = {
    _id: 1234,
    title: 'Book A',
    author: 'Author B',
    genre: 'Genre C'
  }
  return {
    book: book,
    errors: {}
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(booksActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBookPage);
