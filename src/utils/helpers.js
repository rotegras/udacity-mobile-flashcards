import decks from './data';

export function _getAllDecks() {
  return new Promise((res, rej) => {
    setTimeout(() => res({...decks}), 500)
  })
}
