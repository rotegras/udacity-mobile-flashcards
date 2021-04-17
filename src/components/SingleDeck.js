import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import AddQuestion from './AddQuestion';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import * as S from './SingleDeck.style';
import { Card, Title, Button } from 'react-native-paper';


const Stack = createStackNavigator();

function SingleDeck({deck, navigation}) {

  const handleOnPress = () => {
    navigation.navigate('AddQuestion', { deckId: deck.name });
  }

  return (
    <Card style={styles.card}>
      <Card.Title title={deck.name} subtitle={`Contains ${deck.questions.length} questions`}/>
      <Card.Content>
        <Button
          icon="pencil-plus"
          mode="contained"
          onPress={handleOnPress}
          style={styles.button}
        >
          Add Question
        </Button>
        <Button
          icon="arrow-right"
          mode="contained"
          color='green'
          style={styles.button}
        >
          Start Quiz
        </Button>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.cthickreate({
  button: {
    marginBottom: 16
  },
  card: {
    marginTop: 32,
    marginBottom: 16,
    marginRight: 10,
    marginLeft: 10,
  }

})

const mapStateToProps = ({ decks }, { route } ) => {
  const { itemId } = route.params;
  return {
    deck: decks[itemId],
  }
}

export default connect(mapStateToProps)(SingleDeck);
