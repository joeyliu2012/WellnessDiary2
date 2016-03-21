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
    ...SharedStyle.textShadow,
  },
})

export default class Title extends Component {
  static propTypes = {
    children: React.PropTypes.string.isRequired,
  };

  render() {
    return (
      <Text style={styles['Card.Title']}>
        {this.props.children}
      </Text>
    )
  }
}
