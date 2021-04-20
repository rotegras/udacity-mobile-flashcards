import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { addQuestion } from '../redux/actions/actions';
import { Card, Button } from 'react-native-paper';


function AddQuestion({addQuestion, navigation, route}) {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const { deckName } = route.params;

  const handleAddQuestion = () => {
    addQuestion(deckName, question, answer);
    setQuestion('');
    setAnswer('');
    navigation.navigate('Deck Details', {deckName});
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
          <TextInput
            value={answer}
            placeholder='Enter Answer'
            onChangeText={setAnswer}
            style={styles.input}
            />
          <Button
            onPress={handleAddQuestion} disabled={question === '' || answer === ''}
            icon="plus-thick" mode="contained" color='red'
            style={styles.button}
          >
            Add Question
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

const mapDispatchToProps = {
  addQuestion,
}


export default connect(null , mapDispatchToProps)(AddQuestion);
