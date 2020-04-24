import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
        fadeDuration={1000}
        // LOCAL
          source={require('../assets/success.png')}
        // WEB
          // source={{uri: "https://miro.medium.com/max/5000/1*QqoS6WsjG6WSr9-BFFQhbA.jpeg"}}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.resultContainer}>
      <BodyText style={styles.resultText}>
        I needed {' '}
        <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds
        to guess the number {' '}
        <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      </View>

      <MainButton onPress={props.startNewGame}>
        NEW GAME
      </MainButton>
    </View>
    )
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultContainer: {
    marginHorizontal: 30
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;