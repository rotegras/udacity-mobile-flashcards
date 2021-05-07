import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import {
  setAnswerVisibility,
  setCardNumber,
  updateQuizResult,
  setQuizCompleted,
} from '../../redux/actions/quizActions';
import { clearLocalNotification, setLocalNotification, timeToString } from '../../utils/helpers';
import { useNavigation } from '@react-navigation/native';

const today = timeToString();

function ResultButtons({
  deckName,
  cardNumber,
  questionsLength,
  answerVisibility,
  setAnswerVisibility,
  updateQuizResult,
  setCardNumber,
  setQuizCompleted,
}) {

  const navigation = useNavigation();

  const pressActions = () => {
    if (cardNumber < (questionsLength - 1)) {
      setCardNumber(cardNumber + 1);
      navigation.navigate('Quiz', {deckName});
      setAnswerVisibility(false);
    } else {
      setQuizCompleted(true);
      clearLocalNotification().then(setLocalNotification);
    }
  }

  const handlePressCorrect = () => {
    updateQuizResult(today, deckName, questionsLength);
    pressActions();
  }

  const handlePressIncorrect = () => {
    pressActions();
  }

  return (
    <View>
        <Button
          onPress={handlePressCorrect}
          icon='check'
          mode='contained'
          style={{ marginTop: 10 }}
          color='green'
          disabled={!answerVisibility}
        >
          Correct
        </Button>
        <Button
          onPress={handlePressIncorrect}
          icon="cancel"
          mode="contained"
          color='red'
          style={{ marginTop: 10 }}
          disabled={!answerVisibility}
        >
          Incorrect
        </Button>
      </View>
  );
}

const mapStateToProps = ({quiz, decks}, { route }) => {
  const { cardNumber, answerVisibility, quizCompleted } = quiz.card;
  const { deckName } = route.params;
  return {
    answerVisibility,
    cardNumber,
    deckName,
    questionsLength: decks[deckName].questions.length,
    quizCompleted,
  }
}

const mapDispatchToProps = {
  setQuizCompleted,
  updateQuizResult,
  setAnswerVisibility,
  setCardNumber,
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultButtons);
