import {
  View,
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 200;
  }

  if (height < 400) {
    imageSize = 120;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/success.png')}
          />
        </View>
        <Text style={styles.summaryText}>
          Your phone needed{' '}
          <Text style={styles.highlightText}>{roundsNumber}</Text> rounds to
          guess the number{' '}
          <Text style={styles.highlightText}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 8,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.accent500,
    overflow: 'hidden',
    marginVertical: deviceWidth < 380 ? 28 : 36,
  },
  image: {
    // % related to the container
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: deviceWidth < 380 ? 18 : 24,
    textAlign: 'center',
    marginBottom: deviceWidth < 380 ? 18 : 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});
