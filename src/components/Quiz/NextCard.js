import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-paper';
import styles from './Quiz.styles';
import Stats from '../Stats';


function NextCard({
  cardNumber,
  lastCardNumber,
  resultsChecked,
  navigation,
}) {

  const handleNextCard = () => {


  }

  return (
    <View>
    {
      resultsChecked && (cardNumber < lastCardNumber -1) &&
        <Button
          onPress={handleNextCard}
          icon="arrow-right"
          mode="contained"
          color='green'
          style={styles.button}
          >
            Next Card
          </Button>
    }
    </View>
  )

  return <Stats route={route} />
}

const mapStateToProps = ({ decks, quiz }, { route }) => {
  const { cardNumber, deckName } = route.params;
  return {
    cardNumber,
    lastCardNumber: decks[deckName].questions.length,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(NextCard);
