import React, {useState, useEffect, useRef} from 'react';
import { connect } from 'react-redux';
import { timeToString } from '../utils/helpers';
import { updateQuizResult } from '../redux/actions/quizActions';
import styles from './Quiz.styles';
import { View, ScrollView, Text, Animated } from 'react-native';
import { Card, Button } from 'react-native-paper';
import Stats from './Stats';


function Quiz({ cardAnswer, cardQuestion, deck, cardNumber, navigation, dispatch, ...props }) {
  const [answerVisibility, setAnswerVisibility] = useState(false);
  const [resultsChecked, setResultsChecked] = useState(false);

  const today = timeToString();
  const lastCardNumber = deck.questions.length - 1;

  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim])

  const showAnswer = () => {
    setAnswerVisibility(true);
  }

  const handleGoToNextCard = () => {
    setResultsChecked(false);
    setAnswerVisibility(false);
    goToNextCard();
  }

  const answerCorrect = () => {
    setResultsChecked(true);
    handleAnswer();
  }

  const answerIncorrect = () => {
    setResultsChecked(true);
  }

  const goToNextCard = () => navigation.navigate('Quiz', { deckId: deck.name, cardNumber: cardNumber + 1 });

  const handleAnswer = () => {
    const deckName = deck.name
    const questionsLength = deck.questions.length;
    // dispatch(updateQuizResult(today, deckName, questionsLength));
  }

  return (
    <Animated.ScrollView style={[
      styles.container, {
      ...props.style,
      opacity: fadeAnim,
      }]}
    >
      <Card style={styles.card}>
        <Card.Content>
          <Text style={styles.label}>
            {deck.name}
          </Text>
          <Text style={styles.label}>
            {deck.questions.length - cardNumber - 1} cards left
          </Text>
                <Text style={styles.questionText}>
                  {cardQuestion}
                </Text>
                {
                  !answerVisibility
                    ?
                      <Button
                        icon='pencil-plus'
                        mode='outlined'
                        color={'grey'}
                        onPress={showAnswer}
                        style={[styles.button, { alignSelf: 'stretch', position: 'absolute', top: 0, left: 0 }]}
                      >
                        Show Anser
                      </Button>
                    : <Text style={{position: 'absolute'}}>
                        Answer: {cardAnswer}
                      </Text>
                }
                <View style={{marginTop: 'auto', marginBottom: 0,}}>
            {
              !resultsChecked &&
              <View>
                <Button
                  onPress={answerCorrect}
                  icon='check'
                  mode='contained'
                  style={styles.button}
                  color='green'
                  disabled={!answerVisibility}
                >
                  Correct
                      </Button>
                <Button
                  onPress={answerIncorrect}
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
            {
              resultsChecked && cardNumber < lastCardNumber &&
              <Button
                onPress={handleGoToNextCard}
                icon="arrow-right"
                mode="contained"
                color='green'
                style={styles.button}
              >
                Next Card
              </Button>
            }
            {
              resultsChecked && cardNumber >= lastCardNumber &&
              <Stats />
            }
          </View>
        </Card.Content>
      </Card>
    </Animated.ScrollView>
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { deckName, cardNumber } = route.params;
  const deck = decks[deckName];
  return {
    deck,
    cardNumber,
    cardAnswer: deck.questions[cardNumber].answer,
    cardQuestion: deck.questions[cardNumber].question,
  }
}


export default connect(mapStateToProps)(Quiz);
