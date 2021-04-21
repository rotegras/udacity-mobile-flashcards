import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card, Button } from 'react-native-paper';
import styles from './Quiz.styles';
import SafeAreaProvider from 'react-native-safe-area-context';

export default function QuizCard({ ...props }) {
  const {
    answerCorrect,
    answerIncorrect,
    deck,
    cardAnswer,
    cardNumber,
    cardQuestion,
    goToNextCard,
    isAnswered,
    answerVisibility,
    resultsChecked,
  } = props;

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
    goToNextCard();
  }

  const handleAnswerCorrect = () => {
    answerCorrect()
    setResultsChecked(true);
  }

  const handleAnswerIncorrect = () => {
    answerIncorrect();
    setResultsChecked(true);
  }

  return (
    <Animated.View style={[
      styles.container, {
      ...props.style,
      opacity: fadeAnim,
    }]}>
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
          <View style={{ flex: 1, paddingBottom: 80, height: 0, }}>
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
          </View>
          {
            !isAnswered &&
            <View style={{marginTop: 'auto', marginBottom: 0,}}>
              <Button
                onPress={handleAnswerCorrect}
                icon='check'
                mode='contained'
                style={styles.button}
                color='green'
                disabled={!answerVisibility}
              >
                Correct
              </Button>
              <Button
                onPress={handleAnswerIncorrect}
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
            resultsChecked &&
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
        </Card.Content>
      </Card>
    </Animated.View>
  );
}
