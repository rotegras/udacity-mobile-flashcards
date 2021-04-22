import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    flex: 1,
  },
  card: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
    justifyContent: 'space-between',
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
