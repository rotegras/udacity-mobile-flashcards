import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './Quiz.styles';


function CardHeader({ deckName, cardNumber, deckQuestions }) {

  const questionsLength = deckQuestions.length;
  const cardLabel = questionsLength !== 1 ? 'cards' : 'card';

  return (
    <View>
      <Text style={styles.label}>
        {deckName}
      </Text>
      <Text style={styles.label}>
        {questionsLength - cardNumber - 1} {cardLabel} left
      </Text>
    </View>
  )
}

const mapStateToProps = ({ quiz, decks }, { route }) => {
  const { deckName } = route.params;
  const { cardNumber } = quiz.card;

  return {
    deckName,
    cardNumber,
    deckQuestions: decks[deckName].questions,
  }
}


export default connect(mapStateToProps)(CardHeader);
