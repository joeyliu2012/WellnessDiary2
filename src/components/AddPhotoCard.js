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
} from 'react-native'
import _ from 'lodash/fp'
import Card from './Card'
import Button from './Button'

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

  }

  handleSelectPhoto(photo) {
    this.setState({
      selectedPhoto: photo.uri,
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
    const { photos, loading } = this.state
    if (this.state.display) {
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
                <Button onPress={this.handleTakePhotoPress}>
                  Take Photo
                </Button>
              </View>
          }
        </Card.Body>
      </Card>
    )
  }
}
