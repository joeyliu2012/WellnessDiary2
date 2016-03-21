import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native'
import { isEmpty } from 'lodash'

const styles = StyleSheet.create({
  'Card.Body': {
    height: 150,
  },
  'Card.Body--empty': {
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
})

const Body = ({children, empty}) => (
  <View
    style={[
      styles['Card.Body'],
      (empty || isEmpty(children)) && styles['Card.Body--empty'],
    ]}
  >
    {children}
  </View>
)
Body.propTypes = {
  children: React.PropTypes.node,
  empty: React.PropTypes.bool,
}

export default Body
