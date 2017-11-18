import { applyMiddleware, createStore } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableSateInvariant from 'redux-immutable-state-invariant';

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableSateInvariant()));
};

export default configureStore;
