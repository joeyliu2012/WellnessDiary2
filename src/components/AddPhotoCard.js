import React, {
  Component,
  Image,
  StyleSheet,
  ActivityIndicatorIOS,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native'
import _ from 'lodash/fp'
import Images from '../constants/Images'
import Card from './Card'
import Button from './Button'
const { ImagePickerManager } = NativeModules

export default class AddPhotoCard extends Component {
  static propTypes = {
    onSelectPhoto: React.PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      loading: false,
      display: !_.isEmpty(props.photo),
    }

    this.handleAddPhotoPress = this.handleAddPhotoPress.bind(this)
  }

  handleAddPhotoPress() {
    this.setState({ loading: true })
    ImagePickerManager.showImagePicker({
      noData: false,
    }, (response) => {
      this.setState({ loading: false })
      if (response.error || response.didCancel) return
      this.setState({display: true})
      this.props.onSelectPhoto({
        ...response,
        isStatic: true,
        uri: `data:image/jpeg;base64,${response.data}`,
      })
    })
  }

  render() {
    const { display, loading } = this.state
    if (display) {
      return (
        <TouchableOpacity onPress={() => this.setState({display: false})}>
          <Card backgroundImage={this.props.photo} />
        </TouchableOpacity>
      )
    }
    if (loading) {
      return (
        <Card>
          <ActivityIndicatorIOS />
        </Card>
      )
    }
    return (
      <TouchableOpacity onPress={this.handleAddPhotoPress}>
        <Card>
          <Card.Body empty>
            <Image
              key='image'
              style={{ width: 20, height: 20}}
              source={Images['CirclePlus']}
            />
            <Text
              key='text'
              style={{
                color: 'grey',
                padding: 8,
                backgroundColor: 'transparent',
              }}>
              Add a photo
            </Text>
          </Card.Body>
        </Card>
      </TouchableOpacity>
    )
  }
}
