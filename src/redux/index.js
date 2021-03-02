import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

// middleware
import thunk from 'redux-thunk';

// reducers
import characters from './reducers/characters'
import nav from './reducers/nav'

// combine reducers
let reducers = combineReducers({characters, nav})

const store = () => {
    return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
}

export default store();