import React from 'react';
import { connect } from 'react-redux';
import * as S from './DecksCollection.style';
import { Card, Title } from 'react-native-paper';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';

// TODO: LAZY LOAD ITEMS
function Decks({ decks, navigation }) {
  return (
    <ScrollView
      style={[styles.container, {flex: 1}]}>
      { decks
        ? decks.map((deck) => (
          <Card
            key={deck.name}
            onPress={() => navigation.navigate('SingleDeck', { itemId: deck.name })}
            style={styles.card}
          >
            <Card.Title
              title={deck.name}
              subtitle={`${deck.questions.length} cards`}
            />
        </ Card>
        ))
        : <View>There are no decks to show</View>
      }
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  }
});

const mapStateToProps = ({decks}) => {
  return {
    decks: Object.values(decks),
  }
}

export default connect(mapStateToProps)(Decks);
