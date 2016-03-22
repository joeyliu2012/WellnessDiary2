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

const Thumbnail = ({photo}) => (
  <Image
    style={styles['Thumbnail']}
    source={photo}
    resizeMode="cover"
  />
)
Thumbnail.propTypes = {

}

export default class AddPhotoCard extends Component {
  static propTypes = {

  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      photos: [],
      loading: true,
    }
  }

  componentDidMount() {
    CameraRoll.getPhotos({ first: 4 })
      .then((results) => {
        this.setState({
          loading: false,
          photos: _.map('node.image', results.edges),
        })
      })
  }

  render() {
    const { photos, loading } = this.state
    return (
      <Card>
        <Card.Body empty={loading}>
          {loading
            ? <ActivityIndicatorIOS />
            : <ScrollView horizontal style={styles['Thumbnails']}>
                {_.map((photo) =>
                  <Thumbnail key={photo.uri} photo={photo} />, photos)}
              </ScrollView>
          }
          <View>
            <Text>Take Photo</Text>
          </View>
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
