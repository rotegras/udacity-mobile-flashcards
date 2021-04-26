import React, {useState} from 'react';
import { connect } from 'react-redux';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { addQuestion } from '../redux/actions/decksActions';
import { Card, Button } from 'react-native-paper';


function AddQuestion({addQuestion, navigation, deckName}) {

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddQuestion = () => {
    addQuestion(deckName, question, answer);
    navigation.navigate('DeckDetails', {deckName});
    setQuestion('');
    setAnswer('');
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Text style={styles.title}>
            Add a New Question
          </Text>
          <View>
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
          </View>
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
    flex: 1,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
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

const mapStateToProps = ({ }, { route }) => {
  const { deckName } = route.params;
  return {
    deckName,
  }
}

const mapDispatchToProps = {
  addQuestion,
}


export default connect(mapStateToProps , mapDispatchToProps)(AddQuestion);
