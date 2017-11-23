import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableSateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, reduxImmutableSateInvariant()));
};

export default configureStore;
