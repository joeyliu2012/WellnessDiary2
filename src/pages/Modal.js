import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'
import _ from 'lodash/fp'

import SharedStyle from '../constants/SharedStyle'

import CloseButton from '../components/CloseButton'
import Card from '../components/Card'
import CirclePlusIcon from '../components/CirclePlusIcon'

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
  },
})

export default class Modal extends Component {
  static propTypes = {
    mealType: React.PropTypes.string.isRequired,
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
        </View>
        <ScrollView>
          <Card>
            <Card.Body empty>
              <CirclePlusIcon />
              <Text style={{color: 'grey', padding: 8 }}>Add a photo</Text>
            </Card.Body>
          </Card>
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
