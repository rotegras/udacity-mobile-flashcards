const RECEIVE_ALL_QUIZ = 'RECEIVE_ALL_QUIZ';
const SAVE_QUIZ = 'SAVE_QUIZ';


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
  RECEIVE_ALL_QUIZ,
  SAVE_QUIZ,
  receiveAllQuiz,
  saveQuiz,
};
