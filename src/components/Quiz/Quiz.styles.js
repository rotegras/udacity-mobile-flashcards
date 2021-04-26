import { StyleSheet, Dimensions, Platform } from 'react-native';


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
    justifyContent: 'space-between',
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  alignToBottom: {
    marginTop: 'auto',
    marginBottom: 0,
    justifyContent: 'flex-end',
    flex: 1,
  },
  questionText: {
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 48,
    marginTop: 32,
  },
  label: {
    color: '#999',
  },
});


export default styles;
