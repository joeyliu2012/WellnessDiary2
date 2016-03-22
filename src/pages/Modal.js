import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'
import _ from 'lodash/fp'
import moment from 'moment'

import SharedStyle from '../constants/SharedStyle'

import CloseButton from '../components/CloseButton'
import CheckButton from '../components/CheckButton'
import Card from '../components/Card'
import CirclePlusIcon from '../components/CirclePlusIcon'

import AddPhotoCard from '../components/AddPhotoCard'

const styles = StyleSheet.create({
  'Modal': {
    position: 'absolute',
    top: 0,
    left: 0,
    ...SharedStyle.page,
  },
  'Modal-header': {
    margin: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default class Modal extends Component {
  static propTypes = {
    meal: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      date: React.PropTypes.instanceOf(moment).isRequired,
    }).isRequired,

    closeModal: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <View style={[
        styles['Modal'],
        _.pick(['width', 'height'], Dimensions.get('window'))
      ]}>
        <View style={styles['Modal-header']}>
          <CloseButton onPress={this.props.closeModal} />
          <CheckButton onPress={this.props.closeModal} />
        </View>
        <ScrollView>
          <AddPhotoCard />
          <Card>
            <Card.Body empty>
              <CirclePlusIcon />
              <Text style={{color: 'grey', padding: 8 }}>Add nutrition information</Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body empty>
              <CirclePlusIcon />
              <Text style={{color: 'grey', padding: 8 }}>Add location</Text>
            </Card.Body>
          </Card>
        </ScrollView>
      </View>
    )
  }
}
