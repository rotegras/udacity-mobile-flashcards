import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Avatar, Card, Button } from 'react-native-paper';
import { startQuiz, setCardNumber, setAnswerVisibility } from '../redux/actions/quizActions';
import { timeToString } from '../utils/helpers';


function SingleDeck({
  deck,
  navigation,
  startQuiz,
  setCardNumber,
  setAnswerVisibility,
}) {

  const today = timeToString();
  const deckName = deck.name;
  const questionsLength = deck.questions.length;

  const navigateToAddQuestion = () => {
    navigation.navigate('AddQuestion', { deckName });
  }

  const navigateToQuiz = () => {
    startQuiz(today, deckName, questionsLength)
    setCardNumber(0);
    setAnswerVisibility(false);
    navigation.navigate('Quiz', { deckName, cardNumber: 0 });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.row}>
          <Avatar.Text
            size={48}
            label={deckName.split('')[0].toUpperCase()}
          />
          <Card.Title
            title={deckName}
            subtitle={`${questionsLength} cards`}
          />
        </View>
        <Card.Content style={styles.alignToBottom}>
          <Button
            icon="pencil-plus"
            mode="contained"
            onPress={navigateToAddQuestion}
            style={styles.button}
          >
            Add Question
          </Button>
          <Button
            icon="arrow-right"
            mode="contained"
            onPress={navigateToQuiz}
            color='green'
            style={styles.button}
            disabled={deck.questions.length === 0}
          >
            Start Quiz
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height - 300,
  },
  card: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  alignToBottom: {
    marginTop: 'auto',
    marginBottom: 0,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    marginBottom: 48,
  },
})

const mapStateToProps = ({ decks }, { route } ) => {
  const { deckName } = route.params;
  // TODO: actualDeck is redundant?
  return {
    deck: decks[deckName],
  }
}

const mapDispatchToProps = {
  startQuiz,
  setCardNumber,
  setAnswerVisibility,
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeck);
