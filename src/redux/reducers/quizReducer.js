import {
  RECEIVE_ALL_QUIZ,
  UPDATE_QUIZ_RESULT,
  SET_ANSWER_VISIBILITY,
  SET_RESULT_CHECKED,
  SET_CARD_NUMBER,
  SET_ACTUAL_DECK,
} from '../actions/quizActions';


export default function quizReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_QUIZ:
      return {
        ...state,
        ...action.payload,
      }
    case UPDATE_QUIZ_RESULT:
      const { today, deckName, questionsLength } = action;
      const prevCorrect =
        state.days[today] && state.days[today][deckName]
          ? Object.assign(state.days[today][deckName].correct)
          : 0;
      const todayData = {
        [today]: {
          [deckName]: {
            questions: questionsLength,
            correct: prevCorrect + 1,
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
          answerVisibility: action.payload,
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
    case SET_ACTUAL_DECK:
      return {
        ...state,
        card: {
          ...state.card,
          actualDeck: action.payload,
        }
      }
    default:
      return state;
  }
}
