import styled from 'styled-components/native';
import { Text, TouchableOpacity } from 'react-native';


const ButtonWrapper = styled(TouchableOpacity)`
  text-align: center;
  padding: 1rem 2rem;
  background: black;
  margin-bottom: 1rem;
`;

const MessageWrapper = styled(Text)`
  text-align: center;
  color: white;
`;


export { ButtonWrapper, MessageWrapper };
