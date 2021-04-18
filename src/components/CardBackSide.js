import React from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';


export default function CardBackSide({ ...props }) {
  const {
    isAnswered,
    cardNumber,
    lastCardNumber,
    goToNextCard,
    deck,
    answer,
    goToStats,
  } = props;

  const handleGoToNextCard = () => {
    goToNextCard();
  }

  const handleGoToStats = () => {
    goToStats();
  }

  const result = deck.questions[cardNumber].answer === answer
      ? <Text>Your answer is correct</Text>
      : <Text>Your answer is wrong</Text>;

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={result}
          />
        <Card.Content>
          {
            isAnswered && cardNumber < lastCardNumber &&
            <Button
              onPress={handleGoToNextCard}
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
            <View>
              <Text>
                You have completed the Quiz
              </Text>
            <Button
              onPress={handleGoToStats}
              icon="stats-chart" mode="contained"
              color='orange'
              style={styles.button}
            >
              See Stats
            </Button>
            </View>
          }
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
  button: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  }
});
