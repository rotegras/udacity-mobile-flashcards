import { createStore, compose, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import rootReducer from '../reducers/rootReducer';


const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      logger,
    ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  )
)


export default store;

  // TODO: add async storage
