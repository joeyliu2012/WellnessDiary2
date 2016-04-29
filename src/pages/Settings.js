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

const Row = ({ children, onPress }) => (
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
Row.propTypes = {
  children: React.PropTypes.node,
  onPress: React.PropTypes.function.isRequired,
}

const Label = ({ children }) => (
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
Label.propTypes = {
  children: React.PropTypes.node,
}

const Value = ({ children }) => (
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
Value.propTypes = {
  children: React.PropTypes.node,
}

export default connect(
  ({ dropbox }) => ({ dropbox }),
    { logout },
)(class Settings extends Component {

  static propTypes = {
    logout: React.PropTypes.function.isRequired,
    dropbox: React.PropTypes.shape({
      isLoggedIn: React.PropTypes.bool,
    }),
  };

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
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            fontWeight: '700',
            flexDirection: 'row',
            marginTop: 30,
            marginLeft: 20,
            marginRight: 20,
            padding: 10,
          }}
        >
          About
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 15,
            fontWeight: '600',
            flexDirection: 'row',
            marginLeft: 20,
            marginRight: 5,
            lineHeight: 20,
            padding: 10,
          }}
        >
          Welcome to Wellness Diary by Never Go Stable.
          This app is designed to record and track your food nutrition.
          Like Calories, Carbs, Fats, Fiber and etc. Besides, You can choose
          upload food photos and share your location. Your data always save
          and synchronize with a 3rd party dropbox, so you data never get lost.
          The purpose of this app is by using this app to recored meals.
          It makes you diet regular and imporve your health.
        </Text>
      </ScrollView>

    )
  }
})
