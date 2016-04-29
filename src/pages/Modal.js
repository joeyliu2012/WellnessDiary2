import React, {
  Component,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native'
import { connect } from 'react-redux'
import { saveMeal } from '../actions/meals'
import _ from 'lodash/fp'

import SharedStyle from '../constants/SharedStyle'

import CloseButton from '../components/CloseButton'
import CheckButton from '../components/CheckButton'

import PermissionWrap from '../components/PermissionWrap'
import AddPhotoCard from '../components/AddPhotoCard'
import AddNutritionCard from '../components/AddNutritionCard'
import AddLocationCard from '../components/AddLocationCard'

const styles = StyleSheet.create({
  Modal: {
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
      date: React.PropTypes.string.isRequired,
    }).isRequired,

    closeModal: React.PropTypes.func.isRequired,
    saveMeal: React.PropTypes.func,
  };

  constructor(props, context) {
    super(props, context)
    this.state = {
      photo: null,
      nutrition: {},
      location: null,
      ...props.meal,
    }

    this.handleSelectPhoto = this.handleSelectPhoto.bind(this)
    this.handleSaveMeal = this.handleSaveMeal.bind(this)
    this.handleUpdateNutrition = this.handleUpdateNutrition.bind(this)
    this.handleUpdateLocation = this.handleUpdateLocation.bind(this)
  }

  handleSelectPhoto(photo) {
    this.setState({ photo })
  }

  handleUpdateNutrition(patch) {
    this.setState({
      nutrition: {
        ...this.state.nutrition,
        ...patch,
      },
    })
  }

  handleUpdateLocation(location) {
    this.setState({ location })
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
      <View
        style={[
          styles.Modal,
          _.pick(['width', 'height'], Dimensions.get('window')),
        ]}
    >
        <View style={styles['Modal-header']}>
          <CloseButton onPress={this.props.closeModal} />
          <CheckButton onPress={this.handleSaveMeal} />
        </View>
        <ScrollView>
          <AddPhotoCard onSelectPhoto={this.handleSelectPhoto} photo={this.state.photo} />
          <AddNutritionCard
            onUpdateNutrition={this.handleUpdateNutrition}
            nutrition={this.state.nutrition}
          />
          <PermissionWrap type="location">
            <AddLocationCard
              onUpdateLocation={this.handleUpdateLocation}
              location={this.state.location}
            />
          </PermissionWrap>
        </ScrollView>
      </View>
    )
  }
})
