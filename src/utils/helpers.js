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


// TODO :
// add needed functions to manage async storage
// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

export { _getAllDecks, _getAllQuiz, _getInitialData, timeToString };
