import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import { timeToString } from '../utils/helpers';
import { useNavigation } from '@react-navigation/native';
import { startQuiz, setCardNumber, setAnswerVisibility, setQuizCompleted } from '../redux/actions/quizActions'


function Stats({
  deck,
  quiz,
  deckName,
  startQuiz,
  setAnswerVisibility,
  setCardNumber,
  setQuizCompleted,
  ...props }) {

  const width = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const today = timeToString();
  const activeQuiz = quiz.days[today][deckName];
  const questionsLength = deck.questions.length;

  const goal = activeQuiz.correct / activeQuiz.questions;

  const goBackToDeck = () => {
    navigation.navigate('DeckDetails', { deckName });
  }

  const navigateToQuiz = () => {
    startQuiz(today, deckName, questionsLength)
    setCardNumber(0);
    setAnswerVisibility(false);
    setQuizCompleted(false);
    navigation.navigate('Quiz', { deckName });
  }

  useEffect(() => {
    Animated.timing(
      width,
      {
        toValue: goal,
        duration: 800,
        useNativeDriver: false,
        easing: Easing.cubic,
      },
    ).start();
  }, [])

  return (
    <View>
      <View style={styles.barWrapper}>
        <Animated.View style={{
            width: width.interpolate({
              inputRange: [0, goal],
              outputRange: ['0%', `${goal * 100}%`],
            }),
            height: 5,
            backgroundColor: '#999',
            margin: 0,
            padding: 0,
            maxWidth: '100%',
          }}
        >
        </Animated.View>
      </View>
      <Text>
      {`${activeQuiz.correct} correct questions of ${activeQuiz.questions}`}
      </Text>
      <Button
        onPress={goBackToDeck}
        icon='arrow-left'
        mode='contained'
        style={{ marginTop: 10 }}
        color='purple'
      >
        Go Back to Deck
      </Button>
      <Button
        onPress={navigateToQuiz}
        icon='repeat'
        mode='contained'
        style={{ marginTop: 10 }}
        color='orange'
      >
        Repeat Quiz
      </Button>
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
  },
  barWrapper: {
    flex: 1,
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
  }
});

const mapStateToProps = ({ decks, quiz }, { route }) => {
  const { deckName } = route.params;
  const { cardNumber } = quiz.card;
  return {
    deckName,
    quiz,
    deck: decks[deckName],
  }
}

const mapDispatchToProps = {
  startQuiz,
  setCardNumber,
  setAnswerVisibility,
  setQuizCompleted,
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
