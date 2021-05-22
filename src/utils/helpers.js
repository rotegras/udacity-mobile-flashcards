import { decks, quiz } from './data';


function _getInitialData() {
  return Promise.all([
    _getAllDecks(),
    _getAllQuiz(),
  ])
  .then(([decksData, quizData]) => ({
    decksData, quizData
  }));
}

function _getAllDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 500)
  })
}

function _getAllQuiz() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...quiz}), 500)
  })
}

function timeToString (time = Date.now()) {
  const date = new Date(time);
  const todayUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  return todayUTC.toISOString().split('T')[0];
}


export {
  _getAllDecks,
  _getAllQuiz,
  _getInitialData,
  timeToString,
};