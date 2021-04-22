const RECEIVE_DECKS = 'RECEIVE_DECKS';
const GET_DECK_ID = 'GET_DECK_ID';
const ADD_DECK = 'ADD_DECK';
const ADD_QUESTION = 'ADD_QUESTION';
const RECEIVE_ALL_QUIZ = 'RECEIVE_ALL_QUIZ';
const SAVE_QUIZ = 'SAVE_QUIZ';
import { _getAllDecks, _getAllQuiz, _getInitialData } from '../../utils/helpers';


function handleReceiveAllData() {
  return (dispatch) => {
    return _getInitialData()
      .then(({ decksData, quizData }) => {
        dispatch(receiveDecks(decksData));
        dispatch(receiveAllQuiz(quizData));
      })
  }
}

function handleReceiveDecks() {
  return (dispatch) => {
    return _getAllDecks()
      .then((decks) => {
        dispatch(receiveDecks(decks))
    })
  }
}

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks,
  }
}

function getDeckId(id) {
  return {
    type: GET_DECK_ID,
    payload: deckId,
  }
}

function addDeck(id) {
  return {
    type: ADD_DECK,
    payload: id,
  }
} function addQuestion(deckId, question, answer) {
  return {
    type: ADD_QUESTION,
    payload: { deckId, question, answer },
  }
}

function handleReceiveAllQuiz() {
  return (dispatch) => {
    return _getAllQuiz()
      .then((quiz) => {
        dispatch(receiveAllQuiz(quiz))
    })
  }
}

function receiveAllQuiz(quiz) {
  return {
    type: RECEIVE_ALL_QUIZ,
    payload: quiz,
  }
}

function saveQuiz(today, deckName, questionsLength) {
  return {
    type: SAVE_QUIZ,
    today,
    deckName,
    questions: questionsLength,
  }
}


export {
  RECEIVE_DECKS,
  GET_DECK_ID,
  ADD_DECK,
  ADD_QUESTION,
  RECEIVE_ALL_QUIZ,
  SAVE_QUIZ,
  handleReceiveDecks,
  handleReceiveAllQuiz,
  receiveDecks,
  getDeckId,
  addDeck,
  addQuestion,
  saveQuiz,
  handleReceiveAllData,
};
