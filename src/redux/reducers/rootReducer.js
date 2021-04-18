import { combineReducers } from 'redux';
import decksReducer from './decksReducer';
import quizReducer from './quizReducer';

const rootReducer = combineReducers({
  decks: decksReducer,
  quiz: quizReducer,
});

export default rootReducer;
