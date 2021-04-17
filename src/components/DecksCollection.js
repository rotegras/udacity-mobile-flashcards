import React from 'react';
import { connect } from 'react-redux';
import * as S from './DecksCollection.style';
import { Card, Title } from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

// TODO: LAZY LOAD ITEMS
function DecksCollection({ decks, navigation }) {
  return (
    <ScrollView
      style={[styles.container, {flex: 1, borderWidth: 1}]}>
      { decks
        ? decks.map((deck) => (
          <Card
            key={deck.name}
            onPress={() => navigation.navigate('SingleDeck', { itemId: deck.name })}
            style={styles.card}
          >
          <Card.Title title={deck.name} />
        </ Card>
        ))
        : <S.MessageWrapper>There are no decks to show</S.MessageWrapper>
      }
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    flex: 1,
  },
  card: {
    marginTop: 10,
  }
});

const mapStateToProps = ({decks}) => {
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(DecksCollection);
