import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as booksActions from '../../actions/bookAction';

class BooksPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      book: {
        title: '',
        author: '',
        genre: ''
      }
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onAuthorChange = this.onAuthorChange.bind(this);
    this.onGenreChange = this.onGenreChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const book = this.state.book;
    book.title = event.target.value;
    this.setState({book: book});
  }

  onAuthorChange(event) {
    const book = this.state.book;
    book.author = event.target.value;
    this.setState({book: book});
  }

  onGenreChange(event) {
    const book = this.state.book;
    book.genre = event.target.value;
    this.setState({book: book});
  }

  onClickSave() {
    this.props.createBook(this.state.book);
  }

  bookRow(book, index) {
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
            {this.props.books.map(this.bookRow)}
          </tbody>
        </table>
        <h2>Add Book</h2>

        Title: 
        <input
          type = "text"
          onChange = {this.onTitleChange}
          value = {this.state.book.title} />
        <br /><br />

        Author: 
        <input
          type = "text"
          onChange = {this.onAuthorChange}
          value = {this.state.book.author} />
        <br /><br />

        Genre: 
        <input
          type = "text"
          onChange = {this.onGenreChange}
          value = {this.state.book.genre} />
        <br /><br />

        <input
          type = "submit"
          value = "Save"
          onClick = {this.onClickSave} />
      </div>
    );
  }
}

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  createBook: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    books: state.books
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: book => dispatch(booksActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);
