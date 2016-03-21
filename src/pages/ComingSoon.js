import React, {
  View,
  Text,
  StyleSheet,
} from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  'ComingSoon': {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  'ComingSoon-text': {
    color: Colors.text,
    fontWeight: '500',
    fontSize: 24,
  },
})

const ComingSoon = () => (
  <View style={styles['ComingSoon']}>
    <Text style={styles['ComingSoon-text']}>Coming Soon</Text>
  </View>
)

export default ComingSoon
