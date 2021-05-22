import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Card, Button  } from 'react-native-paper';
import { Animated, Text, View } from 'react-native';
import styles from './Quiz.styles';
import ResultButtons from './ResultButtons';
import CardHeader from './CardHeader';
import PropType from 'prop-types';
import Stats from '../Stats';
import { setAnswerVisibility } from '../../redux/actions/quizActions';

function Quiz({
  answerVisibility,
  cardQuestion,
  deckName,
  deckQuestions,
  cardAnswer,
  cardNumber,
  route,
  setAnswerVisibility,
  quizCompleted,
  ...props
}) {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleAnswerVisibility = () => {
    setAnswerVisibility(true);
  }

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 500,
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
        flex: 1,
      }]}
    >
      <Card style={styles.card}>
        {
          quizCompleted
          ? <Card.Content style={styles.cardContent}>
              <CardHeader route={route} />
              <Stats route={route} />
            </Card.Content>
          : <Card.Content style={styles.cardContent}>
              <CardHeader route={route} />
              <View style={{justifyContent: 'space-between', flex: 1}}>
                <Text style={styles.questionText}>
                  {cardQuestion}
                </Text>
                {
                  !answerVisibility
                  ?
                    <Button
                      icon='pencil-plus'
                      mode='contained'
                      color={'green'}
                      onPress={handleAnswerVisibility}
                    >
                      Show Answer
                    </Button>
                  : <Text>
                      Answer: {cardAnswer}
                    </Text>
                }
                {
                  answerVisibility &&
                  <ResultButtons route={route}
                    style={styles.alignToBottom}
                  />
                }
              </View>
            </Card.Content>
          }
      </Card>
    </Animated.View>
  );
}

const mapStateToProps = ({ quiz, decks }, { route }) => {
  const { deckName } = route.params;
  const { answerVisibility, cardNumber, quizCompleted } = quiz.card;
  const deck = decks[deckName];
  return {
    quizCompleted,
    answerVisibility,
    deckName,
    deckQuestions: deck.questions,
    cardAnswer: decks[deckName].questions[cardNumber].answer,
    cardNumber,
    cardQuestion: deck.questions && deck.questions.length > 0
      ? deck.questions[cardNumber].question
      : '',
  }
}

const mapDispatchToProp = {
  setAnswerVisibility,
}

const propTypes = {
  deckName: PropType.string.isRequired,
  decks: PropType.shape.isRequided,
  route: PropType.shape.isRequided,
}

export default connect(mapStateToProps, mapDispatchToProp)(Quiz);
