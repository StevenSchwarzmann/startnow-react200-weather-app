import { combineReducers } from 'redux';
import SearchReducer from './Components/Search/searchReducer'
const rootReducer = combineReducers({
// add reducers
    city: SearchReducer
});

export default rootReducer;
