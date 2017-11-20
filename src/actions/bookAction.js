import * as types from './actionTypes';

export const createBook = (book) => {
  return { type: types.CREATE_BOOK, book };
};
