import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../redux/actions';
import { Card, Button } from 'react-native-paper';


function AddDeck({dispatch, navigation}) {

  const [deckName, setDeckName] = useState('');

  const handleAddDeck = () => {
    dispatch(addDeck(deckName));
    setDeckName('');
    navigation.navigate('Home');
  }

  return (
    <Card style={styles.card}>
      <Card.Title title='Enter the name of the new deck' />
      <TextInput
        value={deckName}
        placeHolder='Enter Deck Name'
        onChangeText={setDeckName}
        style={styles.input}
        />
      <Button
        onPress={handleAddDeck}
        disabled={deckName === ''}
        mode='contained'
        icon="pencil-plus"
      >
        Submit
      </Button>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginTop: 16,
    marginBottom: 16,

  },
  input: {
    height: 40,
    margin: 12,
  },
});


export default connect()(AddDeck);
