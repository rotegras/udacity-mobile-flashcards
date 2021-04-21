import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { timeToString } from '../utils/helpers';
import { saveQuiz } from '../redux/actions/actions';
import QuizCard from './QuizCard';


function Quiz({ answer, deck, cardNumber, navigation, dispatch }) {

  const [cardQuestion, setCardQuestion] = useState(deck.questions[cardNumber].question);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerVisibility, setAnswerVisibility] = useState(false);
  const [resultsChecked, setResultsChecked] = useState(false);

  const today = timeToString();
  const lastCardNumber = deck.questions.length - 1;

  useEffect(() => {
    setCardQuestion(deck.questions[cardNumber].question);
  }, [cardNumber, answer])

  const answerCorrect = () => {
    setIsAnswered(true);
    handleAnswer();
  }

  const answerIncorrect = () => {
    setIsAnswered(true);
  }

  const goToNextCard = () => {
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
    dispatch(saveQuiz(today, deckName, questionsLength));
  }

  return (
      <QuizCard
        answerCorrect={answerCorrect}
        answerIncorrect={answerIncorrect}
        answerVisibility={answerVisibility}
        cardNumber={cardNumber}
        cardAnswer={answer}
        cardQuestion={cardQuestion}
        deck={deck}
        goToNextCard={goToNextCard}
        isAnswered={isAnswered}
        lastCardNumber={lastCardNumber}
        resultsChecked={resultsChecked}
      />
  );
}

const mapStateToProps = ({ decks }, { route }) => {
  const { deckName, cardNumber } = route.params;
  const deck = decks[deckName];
  return {
    deck,
    cardNumber,
    answer: deck.questions[cardNumber].answer,
  }
}


export default connect(mapStateToProps)(Quiz);
