import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

// reducers
import oneliners from './reducers/oneliners';
import currUser from './reducers/authenticated';

// combine reducers
let reducers = combineReducers({oneliners, currUser})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();