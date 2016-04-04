import React, {
  Component,
  PropTypes,
  StyleSheet,
  View,
  MapView,
  Text,
  TouchableOpacity,
} from 'react-native'
import _ from 'lodash/fp'
import Card from './Card'

const styles = StyleSheet.create({
  'AddLocationCard-map': {
    height: 200,
    margin: 20,
    marginTop: 0,
    borderRadius: 10,
  },
})

export default class AddLocationCard extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      location: props.location,
    }
    this.findAndUpdateLocation = this.findAndUpdateLocation.bind(this)
  }

  componentDidMount() {
    if (!this.state.location) this.findAndUpdateLocation()
  }

  findAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition((data) => {
      const location = _.pick(['longitude', 'latitude'], data.coords)
      this.setState({
        location,
      }, this.props.onUpdateLocation(location))
    })
  }

  render() {
    const { location } = this.state
    return (
      <TouchableOpacity onPress={this.findAndUpdateLocation}>
        <MapView
          style={styles['AddLocationCard-map']}
          regionk
          scrollEnabled={false}
          zoomEnabled={false}
          annotations={location ? [location] : []}
          region={location ? {
            ...location,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          } : null}
        />
      </TouchableOpacity>
    )
  }
}
