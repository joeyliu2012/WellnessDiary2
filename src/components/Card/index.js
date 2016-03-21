import React, {
  Component,
  Image,
  StyleSheet,
  View,
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
    margin: 20,
    marginTop: 0,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 }
  },
  'Card--image': {
    height: 200,
    width: 335,
    borderRadius: 10,
    padding: 15,
    margin: 20,
    marginTop: 0,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
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
    const { backgroundImage } = this.props
    if (backgroundImage) {
      return (
        <Image
          style={styles['Card--image']}
          source={backgroundImage}
          resizeMode="cover"
        >
          {this.props.children}
        </Image>
      )
    }
    return (
      <View style={styles['Card']}>
        {this.props.children}
      </View>
    )
  }
}
