import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from '../middlewares/logger';
import reducer from '../reducers';

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(
        thunk,
        logger,
      ),
    )
  )
  export default store;
