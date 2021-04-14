import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';


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
      const { deckId, question, answer } = action.payload;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          'questions': [
            ...state[deckId].questions,
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
