import { decks, quiz } from './data';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';


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


const NOTIFICATION_KEY = 'MobileFlashCards:notifications'

function getDailyReminderValue () {
  return {
    today: "👋 Don't forget to study today!"
  }
}

function clearLocalNotification () {
  return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync);
}

function createNotification () {
  return {
    title: 'It is time to study',
    android: {
      sound: true,
      priority: 'high',
      sticky: false,
      vibrate: true,
    }
  }
}

function setLocalNotification () {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then((data) => {
      if (data === null) {
        Permissions.askAsync(Permissions.NOTIFICATIONS)
          .then(({ status }) => {
            if (status === 'granted') {
              Notifications.cancelAllScheduledNotificationsAsync();

              let tomorrow = new Date();
              tomorrow.setDate(tomorrow.getDate() + 1);
              tomorrow.setHours(22);
              tomorrow.setMinutes(45);

              Notifications.scheduleLocalNotificationAsync(
                createNotification(),
                {
                  time: tomorrow,
                  repeat: 'day',
                }
              );

              AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
            }
          })
          .catch((error) => console.log(error));
      }
    })
}


export {
  _getAllDecks,
  _getAllQuiz,
  _getInitialData,
  timeToString,
  getDailyReminderValue,
  clearLocalNotification,
  createNotification,
  setLocalNotification,
};