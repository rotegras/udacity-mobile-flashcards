import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Ionicons } from '@expo/vector-icons'
import { Avatar, Card } from 'react-native-paper';
import {
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
} from 'react-native';
import Notification from './Notification';

function CardItem ({ deck, navigation }) {

  const deckName = deck.name;
  const handlePressDeck = () => {
    navigation.navigate('DeckDetails', { deckName })
  }

  const questionsLength = deck.questions?.length;
  const cardsLabel = questionsLength === 1 ? 'card' : 'cards';

  return (
    <Card
      key={deckName}
      onPress={handlePressDeck}
      style={styles.card}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 12, }}>
        <Avatar.Text
          size={48}
          label={deck.name?.split('')[0].toUpperCase() || ''}
        />
        <Card.Title
          title={deck.name}
          subtitle={`${questionsLength} ${cardsLabel}`}
        />
        <Ionicons
          name="md-trash"
          size={30}
          iconStyle={{color: 'green', position: 'absolute', right: 10, top: '50%', zIndex: 200}}
          color='black'
          />
      </View>
    </ Card>
  )
}

function Decks ({ sortedDecks, navigation, dispatch }) {

  const renderItem = ({ item }) => {
    return <CardItem
      deck={item}
      navigation={navigation}
      dispatch={dispatch}
    />
  }

    return (
      <SafeAreaView style={styles.container}>
        <Notification />
        <FlatList
            data = {sortedDecks}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
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
      .filter((d) => d.name)
      .sort((a, b) => b.name - a.name),
  }
}


export default connect(mapStateToProps)(Decks);
