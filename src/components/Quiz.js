import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';
import { timeToString } from '../utils/helpers';
import { addQuiz } from '../redux/actions';


function Quiz({ deck, cardNumber, navigation, dispatch }) {

  const [cardQuestion, setCardQuestion] = useState(deck.questions[cardNumber].question);
  const [answer, setAnswer] = useState(undefined);

  // TODO: handle last card
  // TODO: handle card flip / animate
  useEffect(() => {
    console.log('deck name / card number: ', deck.name, cardNumber);
    setCardQuestion(deck.questions[cardNumber].question);
  }, [cardNumber])

  const checkAnswer = () => {
    const answered = answer === deck.questions[cardNumber].answer;
    return answered;
  }

  const handleAnswer = (e) => {
    const { value } = e.target;
    setAnswer(value);
    const quizAnswer = {
      today,
      deck: deck.name,
      question: cardQuestion,
      answerResult: checkAnswer(),
    }

    const today = timeToString();
    dispatch(addQuiz)
    if (cardNumber < deck.questions.length) {
      setAnswer(undefined)
      navigation.navigate('Quiz', { deckId: deck.name, cardNumber: cardNumber + 1 });
    } else {
      alert('no more questions');
    }
  }

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
          {/* <Text>
            {deck.questions[cardNumber].answer}
          </Text> */}
          <Button
            onPress={(e) => handleAnswer(e)}
            icon='check' mode='contained'
            style={styles.button}
            color='green'
            value={true}
          >
            Correct
          </Button>
          <Button
            onPress={(e) => handleAnswer(e)}
            icon="cancel" mode="contained" color='red'
            style={styles.button}
            value={false}
          >
            Incorrect
          </Button>
        </Card.Content>
        <Text>{answer !== undefined && answer.toString()}</Text>
      </Card>
      <Card style={styles.container}>
        {
          answer !== undefined &&
          <Card.Content>
            {
              deck.questions[cardNumber].answer === answer
                ? <Text>Your answer is correct</Text>
                : <Text>Wrong</Text>
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
