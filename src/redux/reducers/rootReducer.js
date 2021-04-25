import { combineReducers } from 'redux';
import decksReducer from './decksReducer';
import quizReducer from './quizReducer';
// import { persistConfig } from '../store/store';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'rootReducer',
  storage: AsyncStorage,
  // whitelist: ['bookmarks']
};

const rootReducer = combineReducers({
  decks: persistReducer(persistConfig, decksReducer),
  quiz: persistReducer(persistConfig, quizReducer)
});

export default rootReducer;
