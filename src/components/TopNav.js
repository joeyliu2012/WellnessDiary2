import React, {
  Component,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native'
import Images from '../constants/Images'
import TopNavLink from './TopNavLink'

const styles = StyleSheet.create({
  'TopNav': {
    justifyContent: 'space-between',
    flexDirection: 'row',
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
      onPress={() => null}
      style={styles['TopNav-right']}
    >
      <Image source={Images['TopNav-settings']} />
    </TouchableOpacity>
  </View>
)
TopNav.propTypes = {

}

export default TopNav
