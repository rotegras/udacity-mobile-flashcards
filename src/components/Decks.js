import React from 'react';
import { connect } from 'react-redux';
import { Avatar, Card, Title } from 'react-native-paper';
import {
  FlatList,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';


function CardItem({ deck, navigation }) {
  const deckName = deck.name;
  const handlePressDeck = () => {
    navigation.navigate('Deck Details', { deckName })
  }

  const questionsLength = deck.questions.length;
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
          label={deck.name.split('')[0].toUpperCase()}
        />
        <Card.Title
          title={deck.name}
          subtitle={`${questionsLength} ${cardsLabel}`}
        />
      </View>
    </ Card>
  )
}

function Decks({ decks, navigation, dispatch }) {
  const renderItem= ({item}) => (
    <CardItem
      deck={item}
      navigation={navigation}
      dispatch={dispatch}
    />
  )

  return (
    <View>
    { decks
      ? <FlatList
          style={styles.container}
          data = {decks}
          keyExtractor={(item) => item.name}
          renderItem={renderItem}
        />
      : <View>There are no decks to show</View>
    }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    minHeight: Dimensions.get('window').height,
    marginBottom: 100,
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
    decks: Object.values(decks),
  }
}


export default connect(mapStateToProps)(Decks);
