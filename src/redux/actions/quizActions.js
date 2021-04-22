const RECEIVE_ALL_QUIZ = 'RECEIVE_ALL_QUIZ';
const UPDATE_QUIZ_RESULT = 'UPDATE_QUIZ_RESULT';
const SET_ANSWER_VISIBILITY = 'SET_ANSWER_VISIBILITY';
const SET_RESULT_CHECKED = 'SET_RESULT_CHECKED';
const SET_CARD_NUMBER = 'SET_CARD_NUMBER';


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

function setResultChecked(value) {
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

export {
  RECEIVE_ALL_QUIZ,
  UPDATE_QUIZ_RESULT,
  SET_ANSWER_VISIBILITY,
  SET_RESULT_CHECKED,
  SET_CARD_NUMBER,
  setResultChecked,
  setCardNumber,
  setAnswerVisibility,
  receiveAllQuiz,
  updateQuizResult,
};
