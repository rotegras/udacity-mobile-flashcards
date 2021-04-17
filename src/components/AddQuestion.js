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
      <Text>Add a New Question</Text>
      <TextInput
        value={question}
        placeHolder='Enter Question Name'
        onChangeText={setQuestion}
        style={styles.input}
        />
      <TextInput
        value={answer}
        placeHolder='Enter Answer'
        onChangeText={setAnswer}
        style={styles.input}
        />
      <Button onPress={handleAddQuestion} disabled={question === '' && answer === ''}>
        <Text style={{flex: 1, textAlign: 'center'}}>Submit Question</Text>
      </Button>
      <Button
        onPress={handleAddQuestion} disabled={question === '' && answer === ''}
        icon="md-pizza" mode="contained" color='red'>
        Submit Question
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});



export default connect()(AddQuestion);
