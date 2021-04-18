import React, {useState} from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { addQuestion } from '../redux/actions';
import { Card, Title, Button } from 'react-native-paper';


function AddQuestion({dispatch, navigation, route}) {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const { deckId } = route.params;

  const handleAddQuestion = () => {
    console.log(deckId, question, answer)
    dispatch(addQuestion(deckId, question, answer));
    setQuestion('');
    setAnswer('');
    navigation.navigate('SingleDeck', {deckId});
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title='Add a new question'
        />
        <Card.Content>
          <Text style={styles.label}>Question</Text>
          <TextInput
            value={question}
            placeHolder='Enter Question Name'
            onChangeText={setQuestion}
            style={styles.input}
            />
          <Text style={styles.label}>Answer</Text>
          <TextInput
            value={answer}
            placeHolder='Enter Answer'
            onChangeText={setAnswer}
            style={styles.input}
            />
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
    marginTop: 10,
    borderColor: '#eee',
    backgroundColor: '#ebebeb',
  },
  button: {
    marginTop: 10,
  },
  label: {
    color: '#999',
  }
});



export default connect()(AddQuestion);
