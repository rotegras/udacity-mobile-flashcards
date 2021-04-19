import React, { useRef, useEffect } from 'react';
import { View, Text, Animated } from 'react-native';
import { Card, Button } from 'react-native-paper';
import styles from './Quiz.styles';


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

  const handleAnswerCorrect = () => {
    answerCorrect()
  }

  const handleAnswerIncorrect = () => {
    answerIncorrect();
  }

  return (
    <Animated.View style={[
      styles.container, {
      ...props.style,
      opacity: fadeAnim
    }]}>
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
    </Animated.View>
  )
}
