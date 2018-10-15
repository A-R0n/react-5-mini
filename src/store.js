import { createStore } from 'redux';

import counter from './ducks/counter';
import people from './ducks/peopleReducer';
import promisedMiddleware from 'redux-promise-middleware';
import promiseMiddleware from 'redux-promise-middleware';

// only the first argument is used for reducers in the createStore function
// const store = createStore(counter);

// Combine the output of all reducers into a single argument
// this object is going to receive as many key value pairs as there are reducers
// this.props.hotdog.currentvalue
// these properties are objects within reducers? i think
const combinedReducers = combineReducers({
    hotdog: counter,
    frenchfry: counter
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(promiseMiddleware()));

export default createStore(combinedReducers, middlewares);