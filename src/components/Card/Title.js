import React, {
  Text,
  StyleSheet,
  Component,
} from 'react-native'
import Colors from '../../constants/Colors'
import SharedStyle from '../../constants/SharedStyle'

const styles = StyleSheet.create({
  'Card.Title': {
    color: Colors.text,
    backgroundColor: 'transparent',
    fontWeight: '700',
    fontSize: 18,
  },
  'Card.Title--shaddow': {
    ...SharedStyle.textShadow,
  },
})

export default class Title extends Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
    shaddow: React.PropTypes.bool,
  };

  render() {
    const { shaddow } = this.props
    return (
      <Text style={[
        styles['Card.Title'],
        shaddow && styles['Card.Title--shaddow'],
      ]}>
        {this.props.children}
      </Text>
    )
  }
}
