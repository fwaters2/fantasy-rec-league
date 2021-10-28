import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import {WELCOME_MESSAGE} from '../assets/constants';

const WelcomeScreen = () => {
  const [codeValue, setCodeValue] = useState('');
  return (
    <View>
      <Text testID="welcome-message">{WELCOME_MESSAGE}</Text>
      <TextInput
        testID="code-input"
        value={codeValue}
        onChangeText={setCodeValue}
      />
      <Text>Test</Text>
    </View>
  );
};

export default WelcomeScreen;
