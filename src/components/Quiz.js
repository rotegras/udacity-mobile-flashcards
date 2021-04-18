import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';


function Quiz({ deck, cardNumber, navigation }) {

  console.log('Card number: ', cardNumber);

  const [q, setQ] = useState(deck.questions[cardNumber].question);

  useEffect(() => {
    setQ(deck.questions[cardNumber].question);
  }, [cardNumber])

  const handleAnswer = () => {
    console.log(deck.name, cardNumber);
    if (cardNumber < deck.questions.length) {
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
            {q}
          </Text>
          {/* <Text>
            {deck.questions[cardNumber].answer}
          </Text> */}
          <Button
            onPress={handleAnswer}
            icon='check' mode='contained'
            style={styles.button}
            color='green'
          >
            Correct
          </Button>
          <Button
            onPress={handleAnswer}
            icon="cancel" mode="contained" color='red'
            style={styles.button}
          >
            Incorrect
          </Button>
        </Card.Content>
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
