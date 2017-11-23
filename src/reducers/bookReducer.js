import * as types from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch(action.type) {
    case types.LOAD_BOOKS_SUCCESS:
      return action.books;

    default:
      return state;
  }
};

export default bookReducer;
