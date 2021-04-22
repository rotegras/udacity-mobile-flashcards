import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { setAnswerVisibility, setResultsChecked, updateQuizResult } from '../../redux/actions/quizActions';
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
  resultsChecked,
  setResultsChecked,
  updateQuizResult,
}) {

  const navigation = useNavigation();

  const handlePressCorrect = () => {
    setResultsChecked(true);
    updateQuizResult(today, deckName, questionsLength);
    if (cardNumber < questionsLength) {
      navigation.navigate('Quiz', {deckName, cardNumber: (cardNumber) => cardNumber + 1});
      setResultsChecked(false);
      setAnswerVisibility(false);
    }
  }

  const handlePressIncorrect = () => {
    setResultsChecked(true);
  }

  return (
    <View style={{marginTop: 'auto', marginBottom: 0,}}>
      {
        !resultsChecked &&
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
  const { answerVisibility, resultsChecked } = quiz.card;
  const { cardNumber, deckName } = route.params;
  return {
    answerVisibility,
    cardNumber,
    deckName,
    questionsLength: decks[deckName].questions.length,
    resultsChecked,
  }
}

const mapDispatchToProps = {
  setResultsChecked,
  updateQuizResult,
  setAnswerVisibility,
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultButtons);
