const RECEIVE_ALL_QUIZ = 'RECEIVE_ALL_QUIZ';
const UPDATE_QUIZ_RESULT = 'UPDATE_QUIZ_RESULT';
const SET_ANSWER_VISIBILITY = 'SET_ANSWER_VISIBILITY';
const SET_RESULT_CHECKED = 'SET_RESULT_CHECKED';
const SET_CARD_NUMBER = 'SET_CARD_NUMBER';
const SET_ACTUAL_DECK = 'SET_ACTUAL_DECK';
const START_QUIZ = 'START_QUIZ';
const SET_QUIZ_COMPLETED = 'SET_QUIZ_COMPLETED';


function receiveAllQuiz(quiz) {
  return {
    type: RECEIVE_ALL_QUIZ,
    payload: quiz,
  }
}

function updateQuizResult(today, deckName, questionsLength) {
  return {
    type: UPDATE_QUIZ_RESULT,
    today,
    deckName,
    questions: questionsLength,
  }
}

function setAnswerVisibility(value) {
  return {
    type: SET_ANSWER_VISIBILITY,
    payload: value,
  }
}

function setResultsChecked(value) {
  return {
    type: SET_RESULT_CHECKED,
    payload: value,
  }
}

function setCardNumber(value) {
  return {
    type: SET_CARD_NUMBER,
    payload: value,
  }
}

function setActualDeck(deckName) {
  return {
    type: SET_ACTUAL_DECK,
    payload: deckName,
  }
}

function startQuiz(today, deckName, questionsLength) {
  return {
    type: START_QUIZ,
    today,
    deckName,
    questionsLength,
  }
}

function setQuizCompleted(value) {
  return {
    type: SET_QUIZ_COMPLETED,
    quizCompleted: value,
  }
}


export {
  RECEIVE_ALL_QUIZ,
  UPDATE_QUIZ_RESULT,
  SET_ANSWER_VISIBILITY,
  SET_RESULT_CHECKED,
  SET_CARD_NUMBER,
  SET_ACTUAL_DECK,
  START_QUIZ,
  SET_QUIZ_COMPLETED,
  setQuizCompleted,
  setResultsChecked,
  setCardNumber,
  setAnswerVisibility,
  receiveAllQuiz,
  updateQuizResult,
  setActualDeck,
  startQuiz,
};
