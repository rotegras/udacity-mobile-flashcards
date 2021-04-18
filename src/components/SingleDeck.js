import React from 'react';
import { connect } from 'react-redux';
import AddQuestion from './AddQuestion';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';


function SingleDeck({deck, navigation}) {

  const navigateToAddQuestion = () => {
    navigation.navigate('AddQuestion', { deckId: deck.name });
  }

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { deckId: deck.name });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={deck.name}
          subtitle={`${deck.questions.length} cards`}
          style={styles.title}
        />
        <Card.Content>
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
    justifyContent: 'center',
  },
  card: {
    marginTop: 32,
    marginBottom: 16,
    marginRight: 10,
    marginLeft: 10,
  },
  button: {
    marginBottom: 16
  },
  title: {
    marginBottom: 48,
  }
})

const mapStateToProps = ({ decks }, { route } ) => {
  const { itemId } = route.params;
  return {
    deck: decks[itemId],
  }
}

export default connect(mapStateToProps)(SingleDeck);
