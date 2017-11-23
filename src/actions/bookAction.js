import * as types from './actionTypes';
import { getAllBooks } from '../api/BooksAPI';

export const loadBooksSuccess = (books) => {
  return { type: types.LOAD_BOOKS_SUCCESS, books };
};

export const loadBooks = () => {
  return (dispatch) => {
    getAllBooks().then((allBooksResponse) => {
      return dispatch(loadBooksSuccess(allBooksResponse.body));
    });
  };
};
