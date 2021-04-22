import { SAVE_QUIZ, RECEIVE_ALL_QUIZ } from '../actions/actions';


export default function quizReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_QUIZ:
      return {
        ...state,
        ...action.payload,
      }
    case SAVE_QUIZ:
      const { today, deckName, questions, correct } = action;
      const todayData = {
        [today]: {
          [deckName]: {
            questions,
            correct: [today][deckName].questions.correct + 1
          }
        }
      }

      return {
        ...state,
        ...todayData,
      }
    default:
      return state;
  }
}
