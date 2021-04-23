import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { setAnswerVisibility, setCardNumber, updateQuizResult } from '../../redux/actions/quizActions';
import styles from './Quiz.styles';
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
}) {

  const navigation = useNavigation();

  const handlePressCorrect = () => {
    updateQuizResult(today, deckName, questionsLength);
    if (cardNumber < (questionsLength -1)) {
      navigation.navigate('Quiz', {deckName, cardNumber: (cardNumber) => cardNumber + 1});
      setCardNumber(cardNumber + 1);
      setAnswerVisibility(false);
    }
  }

  const handlePressIncorrect = () => {
    if (cardNumber < (questionsLength - 1)) {
      navigation.navigate('Quiz', { deckName, cardNumber: (cardNumber) => cardNumber + 1 });
      setCardNumber(cardNumber + 1);
      setAnswerVisibility(false);
    }
  }

  return (
    <View style={{marginTop: 'auto', marginBottom: 0,}}>
      {
        answerVisibility &&
        <View>
          <Button
            onPress={handlePressCorrect}
            icon='check'
            mode='contained'
            style={styles.button}
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
            style={styles.button}
            disabled={!answerVisibility}
          >
            Incorrect
          </Button>
        </View>
      }
    </View>
  );
}

const mapStateToProps = ({quiz, decks}, { route }) => {
  const { cardNumber, answerVisibility } = quiz.card;
  const { deckName } = route.params;
  return {
    answerVisibility,
    cardNumber,
    deckName,
    questionsLength: decks[deckName].questions.length,
  }
}

const mapDispatchToProps = {
  updateQuizResult,
  setAnswerVisibility,
  setCardNumber,
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultButtons);
