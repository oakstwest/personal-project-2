import {createStore, combineReducers} from 'redux';
import reducer from './ducks/users';


let reducers = combineReducers({
    users: reducer
   
})

export default createStore(reducers);
