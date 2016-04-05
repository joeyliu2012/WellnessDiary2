import React, {
  Component,
  PropTypes,
  Text,
  ActivityIndicatorIOS,
  TouchableOpacity,
} from 'react-native'
import _ from 'lodash/fp'
import Permissions from 'react-native-permissions'
import Card from './Card'

const PERMISSION_STATUS_FN_MAP = {
  'location': Permissions.locationPermissionStatus,
  'photos': Permissions.photoPermissionStatus,
}

export default class PermissionWrap extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['location', 'photos']),
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: true,
      confirmed: false,
      permissionStatus: Permissions.StatusUndetermined,
    }
  }

  componentDidMount() {
    PERMISSION_STATUS_FN_MAP[this.props.type]()
    .then((permissionStatus) => {
      this.setState({
        permissionStatus,
        loading: false,
      })
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <Card>
          <ActivityIndicatorIOS />
        </Card>
      )
    }
    if (this.state.permissionStatus === Permissions.StatusAuthorized
     || this.state.confirmed)
      return this.props.children
    if (this.state.permissionStatus === Permissions.StatusUndetermined) {
      return (
        <TouchableOpacity onPress={() => this.setState({confirmed: true})}>
          <Card>
            <Card.Body empty>
              <Text style={{color: 'white'}}>Please allow access to {this.props.type}</Text>
            </Card.Body>
          </Card>
        </TouchableOpacity>
      )
    }
  }
}
