import React, {
  Component,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'

const styles = StyleSheet.create({
  'Button': {
    padding: 4,
    borderColor: 'white',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 5,
    alignItems: 'center',
  },
  'Button-text': {
    color: 'white',
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
        <View style={styles['Button']}>
          <Text style={styles['Button-text']}>
            {this.props.children}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }
}
