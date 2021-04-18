import React from 'react';
import { connect } from 'react-redux';
import AddQuestion from './AddQuestion';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Avatar, Card, Title, Button } from 'react-native-paper';


function SingleDeck({deck, navigation}) {

  const navigateToAddQuestion = () => {
    navigation.navigate('AddQuestion', { deckId: deck.name });
  }

  const navigateToQuiz = () => {
    navigation.navigate('Quiz', { deckId: deck.name, cardNumber: 0 });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <View style={styles.row}>
          <Avatar.Text
            size={48}
            label={deck.name.split('')[0].toUpperCase()}
          />
          <Card.Title
            title={deck.name}
            subtitle={`${deck.questions.length} cards`}
          />
        </View>
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
    flex: 1,
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 12,
    marginBottom: 48,
  },
})

const mapStateToProps = ({ decks }, { route } ) => {
  const { itemId } = route.params;
  return {
    deck: decks[itemId],
  }
}

export default connect(mapStateToProps)(SingleDeck);
