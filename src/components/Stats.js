import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-paper';
import { timeToString } from '../utils/helpers';


function Stats({ quiz, deckName, ...props}) {

  const scaleX = useRef(new Animated.Value(0)).current;

  const today = timeToString();
  const activeQuiz = quiz.days[today][deckName];

  useEffect(() => {
    Animated.timing(
      scaleX,
      {
        toValue: activeQuiz.correct / activeQuiz.questions,
        duration: 1000,
        useNativeDriver: true,
      },
    ).start();
  }, [scaleX])

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={deckName}
          subtitle={today}
          />
        <Card.Content>
          <Animated.View style={[
            styles.bar, {
            ...props.style,
            flex: scaleX,
            }]}
          >

          </Animated.View>
          <Text>
            {activeQuiz.questions}
          </Text>
          <Text>
            {activeQuiz.correct}
          </Text>
        </Card.Content>
      </Card>
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
  bar: {
    height: 20,
    backgroundColor: 'black',
  },
});

const mapStateToProps = ({ quiz }, { route }) => {
  const { deckName } = route.params;
  return {
    deckName,
    quiz,
  }
}

export default connect(mapStateToProps)(Stats);
