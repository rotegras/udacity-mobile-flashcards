import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Card  } from 'react-native-paper';
import { Animated, View, Text } from 'react-native';
import styles from './Quiz.styles';
import QuizAnswer from './QuizAnswer';
import ResultButtons from './ResultButtons';
import NextCard from './NextCard';


function Quiz({ cardAnswer, cardQuestion, deck, cardNumber, navigation, dispatch, route, ...props }) {

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

  const questionsLength = deck.questions.length;
  const cardLabel = questionsLength !== 1 ? 'cards' : 'card';

  return (
    <Animated.View style={[
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
            {questionsLength - cardNumber - 1} {cardLabel} left
          </Text>
          <Text style={styles.questionText}>
            {cardQuestion}
          </Text>
          <QuizAnswer route={route} />
          <ResultButtons route={route} />
          <NextCard route={route} />
        </Card.Content>
      </Card>
    </Animated.View>
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { deckName, cardNumber } = route.params;
  const deck = decks[deckName];
  return {
    deck,
    cardNumber: cardNumber,
    cardAnswer: deck.questions[cardNumber].answer,
    cardQuestion: deck.questions[cardNumber].question,
  }
}


export default connect(mapStateToProps)(Quiz);
