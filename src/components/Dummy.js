import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';


export default function Dummy() {
  const handlePress = () => {
    alert('component working');
  }

  return (
    <View style={styles.container}>
      <Card>

      </Card>
      <Button mode='contained' icon='camera' onPress={handlePress}>
        Press me
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    borderColor: 'red',
    borderWidth: 4,
  }
})
