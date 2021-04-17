import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Button, Card } from 'react-native-material-design';

export default function TouchButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Button>
      <Text>
        {text}
      </Text>
      </Button>
    </TouchableOpacity>
  )
}
