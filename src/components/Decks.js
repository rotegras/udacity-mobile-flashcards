import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Card } from 'react-native-paper';
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';


function CardItem({ deck, navigation }) {
  const deckName = deck.name;
  const handlePressDeck = () => {
    navigation.navigate('Deck Details', { deckName })
  }


  const questionsLength = deck.questions?.length;
  const cardsLabel = questionsLength === 1 ? 'card' : 'cardss';

  return (
    <Card
      key={deckName}
      onPress={handlePressDeck}
      style={styles.card}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 12, }}>
        <Avatar.Text
          size={48}
          label={deck.name?.split('')[0].toUpperCase() || 'X'}
        />
        <Card.Title
          title={deck.name}
          subtitle={`${questionsLength} ${cardsLabel}`}
        />
      </View>
    </ Card>
  )
}

function Decks({ sortedDecks, navigation, dispatch }) {
  const renderItem= ({item}) => (
    <CardItem
      deck={item}
      navigation={navigation}
      dispatch={dispatch}
    />
  )

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          data = {sortedDecks}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
    </SafeAreaView>
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
    height: 80,
    flex: 1,
  }
});

const mapStateToProps = ({decks}) => {
  return {
    sortedDecks: Object.values(decks)
      .sort((a, b) => b.name - a.name),
  }
}


export default connect(mapStateToProps)(Decks);

// TODO: default props??