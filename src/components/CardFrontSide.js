import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-paper';


export default function CardFrontSide({ ...props }) {
  const {
    cardNumber,
    lastCardNumber,
    deck,
    isAnswered,
    cardQuestion,
    answerCorrect,
    answerIncorrect,
  } = props;

  const handleAnswerCorrect = () => {
    answerCorrect();
  }

  const handleAnswerIncorrect = () => {
    answerIncorrect();
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
          {
            cardNumber <= lastCardNumber && !isAnswered &&
            <View>
              <Text style={styles.questionText}>
                {cardQuestion}
              </Text>
              <View>
                <Button
                  onPress={handleAnswerCorrect}
                  icon='check'
                  mode='contained'
                  style={styles.button}
                  color='green'
                >
                  Correct
                </Button>
                <Button
                  onPress={handleAnswerIncorrect}
                  icon="cancel"
                  mode="contained"
                  color='red'
                  style={styles.button}
                >
                  Incorrect
                </Button>
              </View>
            </View>
          }
        </Card.Content>
      </Card>
    </View>
  )
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
