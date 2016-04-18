import React, {
  ScrollView,
  View,
  Text,
  Component,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native'
import { APP_KEY } from '../constants/Dropbox'
import { connect } from 'react-redux'
import { logout } from '../actions/dropbox'

const Row = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 20,
        marginRight: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: 'grey',
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const Label = ({children, onPress}) => (
  <Text
    style={{
      color: 'white',
      fontSize: 18,
      fontWeight: '700',
    }}
  >
    {children}
  </Text>
)

const Value = ({children}) => (
  <Text
    style={{
      color: 'white',
      fontSize: 18,
      fontWeight: '400',
    }}
  >
    {children}
  </Text>
)

export default connect(
  ({dropbox}) => ({ dropbox }),
  { logout },
)(class Settings extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleDropboxLogout = this.handleDropboxLogout.bind(this)
  }

  handleDropboxLogin() {
    Linking.openURL(`https://www.dropbox.com/1/oauth2/authorize?response_type=token&client_id=${APP_KEY}&redirect_uri=wellnessd://auth`)
  }

  handleDropboxLogout() {
    Alert.alert(
      'Are you sure?',
      'Logging out of dropbox means your meal data will no longer be synced in the cloud',
      [
        { text: 'No', onPress: () => null, style: 'cancel' },
        { text: 'Yes', onPress: this.props.logout },
      ]
    )
  }

  render() {
    const { isLoggedIn } = this.props.dropbox
    return (
      <ScrollView>
        <Row onPress={isLoggedIn ? this.handleDropboxLogout : this.handleDropboxLogin}>
          <Label>Dropbox Sync</Label>
          <Value>{isLoggedIn ? 'On' : 'Off'}</Value>
        </Row>
      </ScrollView>
    )
  }
})
