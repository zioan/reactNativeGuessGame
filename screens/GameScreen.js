import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (userNumber === currentGuess) {
      onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

  function nextGuessHandler(direction) {
    //direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        `You know that this is wrong... your number was ${userNumber}`,
        [{ text: 'Sorry', style: 'cancel' }]
      );
      return;
    }

    if (direction === 'lower') {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    console.log(minBoundry, maxBoundry);
    const newRndNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or lower?</Text>
        <View>
          <PrimaryButton onPress={() => nextGuessHandler('lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={() => nextGuessHandler('greater')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 50,
  },
});
