import React, {
  Component,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import Images from '../constants/Images'

const styles = StyleSheet.create({
  'TopNav': {
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
    marginBottom: 15,
  },
  'TopNav-left': {
    flexDirection: 'row',
  },
})

const TopNav = ({
  onPressSettings,
  children,
}) => (
  <View style={styles['TopNav']}>
    <View style={styles['TopNav-left']}>
      {children}
    </View>
    <TouchableOpacity
      onPress={onPressSettings}
      style={styles['TopNav-right']}
    >
      <Image source={Images['TopNav-settings']} />
    </TouchableOpacity>
  </View>
)
TopNav.propTypes = {
  onPressSettings: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
}

export default TopNav
