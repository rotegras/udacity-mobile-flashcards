import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Card  } from 'react-native-paper';
import { Animated, Text } from 'react-native';
import styles from './Quiz.styles';
import QuizAnswer from './QuizAnswer';
import ResultButtons from './ResultButtons';
import NextCard from './NextCard';
import CardHeader from './CardHeader';
import PropType from 'prop-types';
import Stats from '../Stats';

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

  return (
    <Animated.View style={[
      styles.container, {
      ...props.style,
      opacity: fadeAnim,
      }]}
    >
      <Card style={styles.card}>
        {
          cardNumber  === ( questionsLength - 1)
          ? <Card.Content>
              <CardHeader route={route} />
              <Stats route={route} />
            </Card.Content>
          : <Card.Content style={styles.cardContent}>
              <CardHeader route={route} />
              <Text style={styles.questionText}>
                {cardQuestion}
              </Text>
              <QuizAnswer route={route}
                style={styles.alignToBottom}
              />
              <ResultButtons route={route}
                style={styles.alignToBottom}
              />
              <NextCard route={route}
                style={styles.alignToBottom}
              />
            </Card.Content>
          }
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
