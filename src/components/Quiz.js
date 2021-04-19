import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { timeToString } from '../utils/helpers';
import { saveQuiz } from '../redux/actions/actions';
import CardBackSide from './CardBackSide';
import CardFrontSide from './CardFrontSide';
import { Animated } from 'react-native';
import styles from './Quiz.styles';


function Quiz({ deck, cardNumber, navigation, dispatch }) {

  const [cardQuestion, setCardQuestion] = useState(deck.questions[cardNumber].question);
  const [answer, setAnswer] = useState();
  const [guessed, setGuessed] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const today = timeToString();
  const lastCardNumber = deck.questions.length - 1;

  // TODO: handle card flip / animate
  //  const frontInterpolate = animatedValue.interpolate({
  //     inputRange: [0, 180],
  //     outputRange: ['0deg', '180deg'],
  //   });
  //   const backInterpolate = animatedValue.interpolate({
  //     inputRange: [0, 180],
  //     outputRange: ['180deg', '360deg'],
  //   });


  // useEffect(() => {
  //   props.animatedValue = new Animated.Value = 0;
  //   props.frontInterpolate = animatedValue.interpolate({
  //     inputRange: [0, 180],
  //     outputRange: ['0deg', '180deg'],
  //   });
  //   const backInterpolate = animatedValue.interpolate({
  //     inputRange: [0, 180],
  //     outputRange: ['180deg', '360deg'],
  //   });
  // }, []);

  useEffect(() => {
    setCardQuestion(deck.questions[cardNumber].question);
  }, [cardNumber, answer])

  const answerCorrect = () => {
    setAnswer(true);
    setIsAnswered(true);
    handleAnswer();
  }

  const answerIncorrect = () => {
    setAnswer(false);
    setIsAnswered(true);
    handleAnswer();
  }

  const goToNextCard = () => {
    setAnswer('');
    setIsAnswered(false);
    navigation.navigate('Quiz', { deckId: deck.name, cardNumber: cardNumber + 1 });
  }

  const goToStats = () => {
    navigation.navigate('Stats', {today, deckName: deck.name});
  }


  const handleAnswer = () => {
    const deckName = deck.name
    const questionsLength = deck.questions.length;
    deck.questions[cardNumber].answer === answer
      && setGuessed((prevValue) => prevValue + 1);
    dispatch(saveQuiz(today, deckName, questionsLength, guessed));
    if( cardNumber < (deck.questions.length - 1)) {
    }
  }

  if ( isAnswered ) return (
      <CardBackSide
        goToNextCard={goToNextCard}
        cardNumber={cardNumber}
        lastCardNumber={lastCardNumber}
        deck={deck}
        isAnswered={isAnswered}
        goToStats={goToStats}
      />
  )

  return (
      <CardFrontSide
        cardNumber={cardNumber}
        lastCardNumber={lastCardNumber}
        deck={deck}
        isAnswered={isAnswered}
        cardQuestion={cardQuestion}
        answerCorrect={answerCorrect}
        answerIncorrect={answerIncorrect}
      />
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { deckId, cardNumber } = route.params;
  return {
    deck: decks[deckId],
    cardNumber,
  }
}


export default connect(mapStateToProps)(Quiz);
