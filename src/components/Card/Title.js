import React, {
  Text,
  StyleSheet,
  Component,
} from 'react-native'
import Colors from '../../constants/Colors'

const styles = StyleSheet.create({
  'Card.Title': {
    color: Colors.text,
    fontWeight: '700',
    fontSize: 18,
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
