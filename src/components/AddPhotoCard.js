import React, {
  Component,
  Image,
  CameraRoll,
  StyleSheet,
  ActivityIndicatorIOS,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  NativeModules,
} from 'react-native'
import _ from 'lodash/fp'
import Card from './Card'
import Button from './Button'
const { ImagePickerManager } = NativeModules

const styles = StyleSheet.create({
  'Thumbnail': {
    height: 100,
    width: 100,
    margin: 5,
  },
  'Thumbnail--selected': {
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 2,
  },
  'Thumbnails': {
    height: 110,
    marginBottom: 5,
  }
})

export default class AddPhotoCard extends Component {
  static propTypes = {
    onSelectPhoto: React.PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedPhoto: null,
      photos: [],
      loading: true,
      display: !_.isEmpty(props.photo),
    }

    this.renderThumbnail = this.renderThumbnail.bind(this)
    this.handleUseSelectedPhoto = this.handleUseSelectedPhoto.bind(this)
    this.handleTakePhotoPress = this.handleTakePhotoPress.bind(this)
  }

  componentDidMount() {
    CameraRoll.getPhotos({ first: 20 })
      .then((results) => {
        this.setState({
          loading: false,
          photos: _.map('node.image', results.edges),
        })
      })
  }

  handleTakePhotoPress() {
    ImagePickerManager.launchCamera({
      noData: true,
    }, (response) => {
      this.setState({display: true})
      this.handleSelectPhoto(response)
    })
  }

  handleUseSelectedPhoto() {
    this.setState({ display: true })
  }

  handleSelectPhoto(photo) {
    const { selectedPhoto } = this.state
    this.setState({
      selectedPhoto: this.state.selectedPhoto !== photo.uri ? photo.uri : null,
    }, this.props.onSelectPhoto(photo))
  }

  renderThumbnail(photo) {
    return (
      <TouchableOpacity key={photo.uri} onPress={() => this.handleSelectPhoto(photo)}>
        <Image
          style={[
            styles['Thumbnail'],
            photo.uri === this.state.selectedPhoto && styles['Thumbnail--selected'],
          ]}
          source={photo}
        />
      </TouchableOpacity>
    )
  }

  render() {
    const { photos, loading, display, selectedPhoto } = this.state
    if (display) {
      return (
        <TouchableOpacity onPress={() => this.setState({display: false})}>
          <Card backgroundImage={this.props.photo} />
        </TouchableOpacity>
      )
    }
    return (
      <Card>
        <Card.Body empty={loading}>
          {loading
            ? <ActivityIndicatorIOS />
            : <View>
                <ScrollView horizontal style={styles['Thumbnails']}>
                 {_.map(this.renderThumbnail, photos)}
                </ScrollView>
                <Button onPress={selectedPhoto ? this.handleUseSelectedPhoto : this.handleTakePhotoPress}>
                  {selectedPhoto ? 'Use selected photo' : 'Take photo'}
                </Button>
              </View>
          }
        </Card.Body>
      </Card>
    )
  }
}
