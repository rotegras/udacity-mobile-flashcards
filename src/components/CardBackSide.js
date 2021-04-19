import React, {useState, useEffect, useRef} from 'react';
import { Card, Button } from 'react-native-paper';
import { View, Text, Animated } from 'react-native';
import styles from './Quiz.styles';


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

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      },
    ).start();
  }, [fadeAnim])


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
    <Animated.View
      style={[styles.container, {
        ...props.style,
        opacity: fadeAnim,
      }]}>
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
    </Animated.View>
  );
}
