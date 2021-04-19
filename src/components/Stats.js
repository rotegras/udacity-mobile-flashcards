import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card } from 'react-native-paper';


function Stats({ quiz, navigation, today, deckName}) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title={deckName}
          subtitle={today}
          />
      <Text>
        {quiz.questions}
      </Text>
      <Text>
        {quiz.correct}
      </Text>
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
    margin: 10,
  }
})

const mapStateToProps = ({ quiz }, { route }) => {
  const { today, deckName } = route.params;
  return {
    today,
    deckName,
    quiz: quiz[today][deckName],
  }
}

export default connect(mapStateToProps)(Stats);
