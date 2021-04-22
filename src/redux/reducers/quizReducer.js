import {
  RECEIVE_ALL_QUIZ,
  UPDATE_QUIZ_RESULT,
  SET_ANSWER_VISIBILITY,
  SET_RESULT_CHECKED,
  SET_CARD_NUMBER,
} from '../actions/quizActions';


export default function quizReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_QUIZ:
      return {
        ...state,
        days: {
          ...state.days,
          ...action.payload,
        }
      }
    case UPDATE_QUIZ_RESULT:
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
        days: {
          ...state.days,
          ...todayData,
        }
      }
    case SET_ANSWER_VISIBILITY:
      return {
        ...state,
        card: {
          ...state.card,
          visibility: action.payload,
        }
      }
    case SET_RESULT_CHECKED:
      return {
        ...state,
        card: {
          ...state.card,
          resultChecked: action.payload,
        }
      }
    case SET_CARD_NUMBER:
      return {
        ...state,
        card: {
          ...state.card,
          cardNumber: action.payload,
        }
      }
    default:
      return state;
  }
}
