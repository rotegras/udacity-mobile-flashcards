import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { setAnswerVisibility } from '../../redux/actions/quizActions';
import { Button } from 'react-native-paper';
import styles from './Quiz.styles';


function QuizAnswer({ answerVisibility, cardAnswer, setAnswerVisibility }) {
  const handleAnswerVisibility = () => {
    setAnswerVisibility(true);
  }

  return (
    <View style={styles.answerWrapper}>
        {
          !answerVisibility
            ?
              <Button
                icon='pencil-plus'
                mode='contained'
                color={'green'}
                onPress={handleAnswerVisibility}
                style={[styles.button, { alignSelf: 'stretch', position: 'absolute', top: 0, left: 0 }]}
              >
                Show Anser
              </Button>
            : <Text style={{position: 'absolute'}}>
                Answer: {cardAnswer}
              </Text>
        }
    </View>
  )
}

const mapStateToProps = ({ quiz, decks }, { route } ) => {
  const { answerVisibility, cardNumber, actualDeck } = quiz.card;
  const { deckName } = route.params;
  return {
    answerVisibility: answerVisibility,
    cardAnswer: decks[deckName].questions[cardNumber].answer,
  }
}

const mapDispatchToProps = {
  setAnswerVisibility,
}


export default connect(mapStateToProps, mapDispatchToProps)(QuizAnswer);
