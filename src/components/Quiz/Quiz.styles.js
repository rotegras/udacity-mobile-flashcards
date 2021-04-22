import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    // TODO: find value
    minHeight: Dimensions.get('window').height - 300,
  },
  card: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  answerWrapper: {
    position: 'relative',
    flex: 1,
    height: 80,
    padding: 50,
  },
  questionText: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 48,
    marginTop: 32,
  },
  button: {
    marginBottom: 10,
    flex: 1,
  },
  label: {
    color: '#999',
  },
  flipCard: {
    backfaceVisibility: 'hidden',
  },
  flipCardBack: {
    position: 'absolute',
    top: 0,
  }
});


export default styles;
