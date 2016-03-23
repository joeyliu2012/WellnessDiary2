import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { saveMeal } from '../actions/meals'
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

const mapStateToProps = null
const mapDispatchToProps = {
  saveMeal,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(class Modal extends Component {
  static propTypes = {
    meal: React.PropTypes.shape({
      type: React.PropTypes.string.isRequired,
      date: React.PropTypes.instanceOf(moment).isRequired,
    }).isRequired,

    closeModal: React.PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      photo: null,
    }

    this.handleSelectPhoto = this.handleSelectPhoto.bind(this)
    this.handleSaveMeal = this.handleSaveMeal.bind(this)
  }

  handleSelectPhoto(photo) {
    this.setState({photo})
  }

  handleSaveMeal() {
    this.props.saveMeal({
      ...this.props.meal,
      ...this.state,
    })
    this.props.closeModal()
  }

  render() {
    return (
      <View style={[
        styles['Modal'],
        _.pick(['width', 'height'], Dimensions.get('window'))
      ]}>
        <View style={styles['Modal-header']}>
          <CloseButton onPress={this.props.closeModal} />
          <CheckButton onPress={this.handleSaveMeal} />
        </View>
        <ScrollView>
          <AddPhotoCard onSelectPhoto={this.handleSelectPhoto} />
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
})
