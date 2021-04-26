import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';
import { timeToString } from '../utils/helpers';
import CardHeader from './Quiz/CardHeader';

function Stats({ quiz, deckName, route, ...props}) {

  const width = useRef(new Animated.Value(0)).current;

  const today = timeToString();
  const activeQuiz = quiz.days[today][deckName];

  const goal = activeQuiz.correct / activeQuiz.questions;
  useEffect(() => {
    Animated.timing(
      width,
      {
        toValue: goal,
        duration: 800,
        useNativeDriver: true,
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
        color='green'
      >
        Go Back to Deck
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

const mapStateToProps = ({ quiz }, { route }) => {
  const { deckName } = route.params;
  return {
    deckName,
    quiz,
  }
}

export default connect(mapStateToProps)(Stats);
