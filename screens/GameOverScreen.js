import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';

const GameOverScreen = props => {
  return (
    <ScrollView>
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
    </ScrollView>

    )
};

const styles =  StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 10
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: Dimensions.get('window').height * 0.7 / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30
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
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 10 : 20
  }
});

export default GameOverScreen;