import {combineReducers} from 'redux';
import { categoryReducer } from './createreducer';  
const myReducer=combineReducers({//data binding by redux
   // city: categoryReducer
     dataSource: categoryReducer
});
export default myReducer;