import { receiveDecks } from './decksActions';
import { receiveAllQuiz } from './quizActions';
import { _getInitialData } from '../../utils/helpers';


function handleReceiveAllData() {
  return (dispatch) => {
    return _getInitialData()
      .then(({ decksData, quizData }) => {
        dispatch(receiveDecks(decksData));
        dispatch(receiveAllQuiz(quizData));
      })
  }
}


export { handleReceiveAllData };