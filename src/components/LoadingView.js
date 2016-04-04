import React, {
  StyleSheet,
  ActivityIndicatorIOS,
  View,
  Text,
} from 'react-native'
import Colors from '../constants/Colors'

const styles = StyleSheet.create({
  'LoadingView': {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'LoadingView-indicator': {
    marginTop: 20,
  },
  'LoadingView-message': {
    color: Colors.text,
    fontWeight: '500',
    fontSize: 14,
  },
})

const MESSAGE = 'Loading your meal data...'

const LoadingView = () => (
  <View style={styles['LoadingView']}>
    <Text
      style={styles['LoadingView-message']}
    >
      {MESSAGE}
    </Text>
    <ActivityIndicatorIOS
      style={styles['LoadingView-indicator']}
      color={Colors.text}
    />
  </View>
)

export default LoadingView
