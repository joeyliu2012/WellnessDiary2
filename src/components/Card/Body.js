import React, {
  Component,
  View,
  StyleSheet,
} from 'react-native'
import { isEmpty } from 'lodash'

const styles = StyleSheet.create({
  'Card.Body': {
  },
  'Card.Body--empty': {
    height: 65,
    borderRadius: 5,
    borderColor: 'grey',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
})

const Body = ({children}) => (
  <View
    style={[
      styles['Card.Body'],
      isEmpty(children) && styles['Card.Body--empty'],
    ]}
  >
    {children}
  </View>
)
Body.propTypes = {
  children: React.PropTypes.node,
}

export default Body
