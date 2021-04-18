import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { addQuestion } from '../redux/actions';
import { Card, Button, RadioButton } from 'react-native-paper';


// TODO: change answer to boolean and checkbox??
//
function AddQuestion({dispatch, navigation, route}) {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState();

  const { deckId } = route.params;

  const handleAddQuestion = () => {
    console.log(deckId, question, answer)
    dispatch(addQuestion(deckId, question, answer));
    setQuestion('');
    setAnswer('');
    navigation.navigate('Deck Details', {deckId});
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title='Add a new question'
        />
        <Card.Content>
          <TextInput
            value={question}
            placeholder='Enter Question'
            onChangeText={setQuestion}
            style={styles.input}
            />
          <RadioButton.Group
            onValueChange={newAnswer => setAnswer(newAnswer)} value={answer}
            style={styles.row}
            style={{flex: 1,}}
          >
            <Text style={{color: '#999', marginTop: 10}}>Enter the Answer</Text>
            <View style={styles.row}>
              <RadioButton
                value="true"
              />
              <Text>True</Text>
            </View>
            <View style={styles.row}>
              <RadioButton
                value="false"
              />
              <Text>False</Text>
            </View>
          </RadioButton.Group>
          <Button
            onPress={handleAddQuestion} disabled={question === '' || answer === ''}
            icon="plus-thick" mode="contained" color='red'
            style={styles.button}
          >
            Submit Question
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
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    height: 40,
    marginTop: 6,
    marginBottom: 6,
    borderColor: '#eee',
    backgroundColor: '#ebebeb',
    paddingLeft: 12,
    paddingRight: 12,
  },
  button: {
    marginTop: 16,
  },
  label: {
    color: '#999',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }

});


export default connect()(AddQuestion);
