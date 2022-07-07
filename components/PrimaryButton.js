import { View, Text, Pressable, StyleSheet } from 'react-native';

function PrimaryButton({ children, onButtonPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // style on 'pressed' works on both platforms
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressedIOS]
            : styles.buttonInnerContainer
        }
        onPress={onButtonPress}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressedIOS: {
    opacity: 0.75,
  },
});
