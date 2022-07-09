import { View, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: deviceWidth < 380 ? 16 : 32,
    marginHorizontal: deviceWidth < 380 ? 16 : 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,

    //elevation is box shadow for android only!
    elevation: 18,

    //shadow is box shadow for IOS only!
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
