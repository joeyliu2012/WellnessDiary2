import React, {
  Component,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import Colors from '../constants/Colors'
import Images from '../constants/Images'

const styles = StyleSheet.create({
  'TopNavLink': {
    paddingRight: 10,
  },
  'TopNavLink-text': {
    color: Colors.textInactive,
    fontSize: 18,
    fontWeight: '500',
  },
  'TopNavLink-inner': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const TopNavLink = ({
  active,
  onPress,
  children,
}) => (
  <TouchableOpacity
    style={styles['TopNavLink']}
    onPress={onPress}
  >
    <View style={styles['TopNavLink-inner']}>
      <Text style={[
        styles['TopNavLink-text'],
        active && { color: Colors.text },
      ]}>{children}</Text>
      {active && 
        <Image
          style={styles['TopNavLink-active']}
          source={Images['TopNavLink-active']}
        />
      }
    </View>
  </TouchableOpacity>
)
TopNavLink.propTypes = {
  active: React.PropTypes.bool,
  onPress: React.PropTypes.func.isRequired,
  children: React.PropTypes.string.isRequired,
}

export default TopNavLink
