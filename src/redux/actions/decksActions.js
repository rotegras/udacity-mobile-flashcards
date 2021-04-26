const RECEIVE_DECKS = 'RECEIVE_DECKS';
const GET_DECK_ID = 'GET_DECK_ID';
const ADD_DECK = 'ADD_DECK';
const ADD_QUESTION = 'ADD_QUESTION';

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks,
  }
}

function getDeckId(deckName) {
  return {
    type: GET_DECK_ID,
    payload: deckName,
  }
}

function addDeck(deckName) {
  return {
    type: ADD_DECK,
    payload: deckName,
  }
}

function addQuestion(deckName, question, answer) {
  return {
    type: ADD_QUESTION,
    deckName, question, answer,
  }
}


export {
  RECEIVE_DECKS,
  GET_DECK_ID,
  ADD_DECK,
  ADD_QUESTION,
  receiveDecks,
  getDeckId,
  addDeck,
  addQuestion,
};
