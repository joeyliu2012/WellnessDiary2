import React, {
  View,
  Component,
  StyleSheet,
} from 'react-native'
import Colors from '../../constants/Colors'

import Title from './Title'
import Header from './Header'
import Body from './Body'

const styles = StyleSheet.create({
  'Card': {
    borderRadius: 10,
    backgroundColor: Colors.cardBackground,
    padding: 15,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
})

export default class Card extends Component {
  static propTypes = {
    children: React.PropTypes.node,
  };

  static Title = Title;
  static Header = Header;
  static Body = Body;

  render() {
    return (
      <View style={styles['Card']}>
        {this.props.children}
      </View>
    )
  }
}
