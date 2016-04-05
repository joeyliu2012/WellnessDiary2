import React, {
  Component,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import SharedStyle from '../constants/SharedStyle'

const styles = StyleSheet.create({
  'Button': {
    padding: 8,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    alignItems: 'center',
  },
  'Button-text': {
    fontSize: 16,
    fontWeight: '400',
    color: 'white',
    ...SharedStyle.textShadow,
  },
})

export default class Button extends Component {
  static propTypes = {
    onPress: React.PropTypes.func.isRequired,
    children: React.PropTypes.string,
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <View style={[styles['Button'], this.props.style]}>
          <Text style={styles['Button-text']}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
