export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const GET_DECK_ID = 'GET_DECK_ID';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';
import { _getAllDecks } from '../../utils/helpers';


function handleReceiveDecks() {
  return (dispatch) => {
    return _getAllDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
    })
  }
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks,
  }
}

export function getDeckId(id) {
  return {
    type: getDeck,
    payload: deckId,
  }
}

export function addDeck(id) {
  return {
    type: ADD_DECK,
    payload: id,
  }
}

export function addQuestion(deckId, question, answer) {
  return {
    type: ADD_QUESTION,
    payload: { deckId, question, answer },
  }
}

export {
  handleReceiveDecks,
};
