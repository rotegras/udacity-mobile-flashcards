import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../redux/actions/decksActions';
import { Card, Button } from 'react-native-paper';


function AddDeck({dispatch, navigation}) {

  const [deckName, setDeckName] = useState('');

  const handleAddDeck = () => {
    dispatch(addDeck(deckName));
    navigation.navigate('DeckDetails', { deckName });
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.title}>Add New Deck</Text>
        <Card.Content style={styles.alignToBottom}>
          <TextInput
            value={deckName}
            placeholder='Enter Deck Name'
            onChangeText={setDeckName}
            style={styles.input}
            />
          <Button
            onPress={handleAddDeck}
            disabled={deckName === ''}
            mode='contained'
            icon='pencil-plus'j
          >
            Submit
          </Button>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    justifyContent: 'space-between',
    padding: 0,
  },
  title: {
    fontWeight: 'bold',
    margin: 16,
    fontSize: 24,
  },
  input: {
    height: 40,
    marginTop: 'auto',
    marginBottom: 'auto',
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
  },
  alignToBottom: {
    marginTop: 'auto',
    marginBottom: 0,
    justifyContent: 'flex-end',
    flex: 1,
  }
});


export default connect()(AddDeck);
