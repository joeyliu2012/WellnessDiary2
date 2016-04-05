  import React, {
  Component,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native'
import { BlurView } from 'react-native-blur'
import Colors from '../../constants/Colors'
import SharedStyle from '../../constants/SharedStyle'

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
    ...SharedStyle.cardShadow,
  },
  'Card--image': {
    height: 200,
    width: _.get('width', Dimensions.get('window')),
    backgroundColor: Colors.cardBackground,
    borderRadius: 10,
    margin: 20,
    marginTop: 0,
    ...SharedStyle.cardShadow,
  },
  'Card-blur': {
    padding: 15,
  },
})

export default class Card extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    blurred: React.PropTypes.bool,
  };

  static Title = Title;
  static Header = Header;
  static Body = Body;

  render() {
    const {
      backgroundImage,
      blurred,
    } = this.props
    if (backgroundImage) {
      return (
        <Image
          style={styles['Card--image']}
          source={backgroundImage}
          resizeMode="cover"
        >
          {blurred
            ? <BlurView blurType="dark" style={styles['Card-blur']}>
                {this.props.children}
              </BlurView>
            : <View style={styles['Card-blur']}>{this.props.children}</View>
          }
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
