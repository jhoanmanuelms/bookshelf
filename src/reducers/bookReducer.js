import * as types from '../actions/actionTypes';

const bookReducer = (state = [], action) => {
  switch(action.type) {
    case types.CREATE_BOOK:
      return [
        ...state,
        Object.assign({}, action.book)
      ];

    default:
      return state;
  }
};

export default bookReducer;
