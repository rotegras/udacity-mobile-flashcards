import { createStore, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import rootReducer from '../reducers/rootReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore } from 'redux-persist';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
    ),
  )
)

const persistor = persistStore(store);

export {
  store, persistor,
};

// TODO: add async storage
