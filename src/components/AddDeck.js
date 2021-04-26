import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { addDeck } from '../redux/actions/decksActions';
import { Card, Button } from 'react-native-paper';


function AddDeck({dispatch, navigation}) {

  const [deckName, setDeckName] = useState('');

  const handleAddDeck = () => {
    dispatch(addDeck(deckName));
    setDeckName('');
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title='Add new Deck' />
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
    padding: 10,
    flex: 1,
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    backgroundColor: '#ebebeb',
    paddingLeft: 10,
  },
  alignToBottom: {
    marginTop: 'auto',
    marginBottom: 0,
    justifyContent: 'flex-end',
  }
});


export default connect()(AddDeck);
