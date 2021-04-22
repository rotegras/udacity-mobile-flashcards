import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions/actions';


export default function decksReducer(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.payload,
      }
    case ADD_DECK:
      return {
        ...state,
        [action.payload]: {
          'name': action.payload,
          'questions': [],
        }
      }
    case ADD_QUESTION:
      const { deckName, question, answer } = action.payload;
      return {
        ...state,
        [deckName]: {
          ...state[deckName],
          'questions': [
            ...state[deckName].questions,
            {
              'question': question,
              'answer': answer,
            }
          ]
        }
      }
    default:
      return state;
  }
}
