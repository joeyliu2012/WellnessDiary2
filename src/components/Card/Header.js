import React, {
  View,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  'Card.Header': {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
})

const Header = ({children}) => (
  <View style={styles['Card.Header']}>
    {children}
  </View>
)

Header.propTypes = {
  children: React.PropTypes.node,
}

export default Header
