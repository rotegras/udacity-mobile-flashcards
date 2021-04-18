import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-paper';


function Quiz({ deck, cardNumber, navigation }) {

  const handleAnswer = () => {
    navigation.navigate('Quiz', { deckId: deck.name, counter });
  }

  return (
    <View>
      <Card style={styles.card}>
        <Card.Title
          subtitle={deck.name}
          />
        <Card.Content>
          <Text style={styles.textBig}>
            {deck.questions[0].question}
          </Text>
          <Text>
            {deck.questions[0].answer}
          </Text>
          <Text>
          {deck.questions.length} Cards
          </Text>
          <Button
            onPress={handleAnswer}
            icon="check" mode="contained" color='red'
            style={styles.button}
            color='green'
          >
            Correct
          </Button>
          <Button
            onPress={handleAnswer}
            icon="cancel" mode="contained" color='red'
            style={styles.button}
          >
            Incorrect
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    textAlign: 'center',
    margin: 10,
  },
  textBig: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 32,
  },
  button: {
    marginBottom: 10,
  }
});

const mapStateToProps = ({ decks }, { route }) => {
  const { deckId } = route.params;
  return {
    deck: decks[deckId],
  }
}

export default connect(mapStateToProps)(Quiz);
