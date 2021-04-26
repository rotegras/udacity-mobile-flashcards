import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import {
  setAnswerVisibility,
  setCardNumber,
  updateQuizResult,
  setQuizEnded,
  quizEnded,
} from '../../redux/actions/quizActions';
import { timeToString } from '../../utils/helpers';
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
  quizEnded,
  setQuizEnded,
}) {

  const navigation = useNavigation();

  const handlePressCorrect = () => {
    updateQuizResult(today, deckName, questionsLength);
    if (cardNumber < (questionsLength - 1)) {
      navigation.navigate('Quiz', {deckName, cardNumber: (cardNumber) => cardNumber + 1});
      setAnswerVisibility(false);
      setCardNumber(cardNumber + 1);
    } else {
      setQuizEnded(true);
    }
  }

  const handlePressIncorrect = () => {
    if (cardNumber < (questionsLength - 1)) {
      navigation.navigate('Quiz', { deckName, cardNumber: (cardNumber) => cardNumber + 1 });
      setAnswerVisibility(false);
      setCardNumber(cardNumber + 1);
    } else {
      setQuizEnded(true);
    }
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
  const { cardNumber, answerVisibility, quizEnded } = quiz.card;
  const { deckName } = route.params;
  return {
    answerVisibility,
    cardNumber,
    deckName,
    questionsLength: decks[deckName].questions.length,
    quizEnded,
  }
}

const mapDispatchToProps = {
  setQuizEnded,
  updateQuizResult,
  setAnswerVisibility,
  setCardNumber,
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultButtons);
