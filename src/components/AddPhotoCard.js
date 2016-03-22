import React, {
  Component,
  Image,
  CameraRoll,
  StyleSheet,
  ActivityIndicatorIOS,
  ScrollView,
  View,
  Text,
} from 'react-native'
import _ from 'lodash/fp'
import Card from './Card'
import Button from './Button'

const styles = StyleSheet.create({
  'Thumbnail': {
    height: 75,
    width: 75,
    margin: 5,
  },
  'Thumbnails': {
    height: 85,
    // flexDirection: 'row',
  }
})

export default class AddPhotoCard extends Component {
  static propTypes = {

  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      selectedPhoto: null,
      photos: [],
      loading: true,
    }
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

  renderThumbnail(photo) {
    return (
      <Image
        key={photo.uri}
        style={styles['Thumbnail']}
        source={photo}
      />
    )
  }

  render() {
    const { photos, loading } = this.state
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

// <Card backgroundImage={_.get('meal.photo', this.props)}>
//   <Card.Body empty>
//     <CirclePlusIcon />
//     <Text style={{color: 'grey', padding: 8 }}>Add a photo</Text>
//   </Card.Body>
// </Card>
