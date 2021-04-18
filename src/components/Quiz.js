import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';
import { timeToString } from '../utils/helpers';
import { saveQuiz } from '../redux/actions/actions';



function Quiz({ deck, cardNumber, navigation, dispatch }) {

  const today = timeToString();

  const [cardQuestion, setCardQuestion] = useState(deck.questions[cardNumber].question);
  const [answer, setAnswer] = useState();
  const [guessed, setGuessed] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const lastCardNumber = deck.questions.length - 1;

  // TODO: handle last card
  // TODO: handle card flip / animate
  useEffect(() => {
    // TODO: clean
    console.log(`
    card number: ${cardNumber}
    question: ${deck.questions[cardNumber].question}
    answer: ${deck.questions[cardNumber].answer}
    answer by me: ${answer}
    `);
    setCardQuestion(deck.questions[cardNumber].question);
  }, [cardNumber, answer])

  const goToNextCard = () => {
    setAnswer('');
    setIsAnswered(false);
    navigation.navigate('Quiz', { deckId: deck.name, cardNumber: cardNumber + 1 });
  }

  const answerCorrect = () => {
    setAnswer(true);
    setIsAnswered(true);
    handleAnswer();
  }

  const answerIncorrect = () => {
    setAnswer(false);
    setIsAnswered(true);
    handleAnswer();
  }

  const handleAnswer = () => {
    const deckName = deck.name
    const questionsLength = deck.questions.length;
    deck.questions[cardNumber].answer === answer
      && setAnswered((prevValue) => prevValue + 1);
    dispatch(saveQuiz(today, deckName, questionsLength, guessed));
    if( cardNumber < (deck.questions.length - 1)) {
    }
    // TODO: check/clean this
    else {
      alert('no more questions');
    }
  }

  const result = deck.questions[cardNumber].answer === answer
      ? <Text>Your answer is correct</Text>
      : <Text>Your answer is wrong</Text>;

  if( isAnswered ) return (
    <View>
      <Card>
        <Card.Title
          title={result}
          />
          {
            isAnswered && cardNumber < lastCardNumber &&
            <Button
              onPress={goToNextCard}
              icon="arrow-right"
              mode="contained"
              color='green'
              style={styles.button}
            >
              Next Question
            </Button>
          }
          {
          cardNumber >= lastCardNumber &&
          <Button
            icon="cancel" mode="contained"
            color='orange'
            style={styles.button}
          >
            See Stats
          </Button>
          }
      </Card>
    </View>
  )

  return (
    <View style={styles.container}>
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
            cardNumber < lastCardNumber &&
            <View>
              <Button
                onPress={answerCorrect}
                icon='check'
                mode='contained'
                style={styles.button}
                color='green'
              >
                Correct
              </Button>
              <Button
                onPress={answerIncorrect}
                icon="cancel"
                mode="contained"
                color='red'
                style={styles.button}
              >
                Incorrect
              </Button>
            </View>
          }
        </Card.Content>
        <Text>{answer !== undefined && answer.toString()}</Text>
      </Card>
      <Card style={styles.container}>
        {
          answer &&
          <Card.Content>
            {
              deck.questions[cardNumber].answer === answer
                ? <Text>Your answer is correct</Text>
                : <Text>Your answer is wrong</Text>
              }
          </Card.Content>
        }
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    margin: 10,
    paddingTop: 10,
  },
  questionText: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 48,
    marginTop: 32,
  },
  button: {
    marginBottom: 10,
  },
  label: {
    color: '#999',
  }
});

const mapStateToProps = ({ decks }, { route }) => {
  const { deckId, cardNumber } = route.params;
  return {
    deck: decks[deckId] || 'react',
    cardNumber,
  }
}


export default connect(mapStateToProps)(Quiz);
