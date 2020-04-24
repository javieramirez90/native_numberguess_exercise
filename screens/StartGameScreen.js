import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';

// TouchableWithoutFeedback component that allows us to touch any place in screen without a feedback
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import NumberContainer from '../components/NumberContainer';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid number', 'Number has to be between 1 - 99', [{text: "Okay", style: 'destructive', onPress: resetInputHandler}])
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOut;

  if(confirmed){
    confirmedOut = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <View>
          <NumberContainer>{selectedNumber}</NumberContainer>
          <MainButton onPress={() => props.onStartGame(selectedNumber)}>
            <Text>Start Game</Text>
          </MainButton>
        </View>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a Number</BodyText>
          <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          value={enteredValue}
          onChangeText={numberInputHandler}
          placeholder="Start here!"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}><Button title="Reset" onPress={resetInputHandler} color={Colors.primary}/></View>
            <View style={styles.button}><Button title="Confirm" onPress={confirmInputHandler} color={Colors.accent}/></View>
          </View>
        </Card>
        { confirmedOut }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    marginVertical: 10 //Replaces marginBottom and marginTop
  },
  instructions: {
    fontFamily: 'open-sans',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  button: {
    width: 100
  },
  input: {
    width: 100
  },
  summaryContainer: {
     marginTop: 20,
     alignItems: 'center'
  }
});

export default StartGameScreen;