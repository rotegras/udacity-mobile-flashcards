import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Card  } from 'react-native-paper';
import { Animated, View, Text } from 'react-native';
import styles from './Quiz.styles';
import QuizAnswer from './QuizAnswer';
import ResultButtons from './ResultButtons';
import NextCard from './NextCard';
import PropType from 'prop-types';

function Quiz({ cardQuestion, deckName, deckQuestions, cardNumber, route, ...props }) {

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

  const questionsLength = deckQuestions.length;
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
            {deckName}
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

const mapStateToProps = ({ quiz, decks }, { route }) => {
  const { deckName } = route.params;
  const { cardNumber } = quiz.card;
  const deck = decks[deckName];
  return {
    deckName,
    deckQuestions: deck.questions,
    cardNumber,
    cardQuestion: deck.questions && deck.questions.length > 0
      ? deck.questions[cardNumber].question
      : '',
  }
}

const propTypes = {
  deckName: PropType.string.isRequired,
  decks: PropType.shape.isRequided,
  route: PropType.shape.isRequided,
}

export default connect(mapStateToProps)(Quiz);
